-- ============================================================
-- PMM Hub — initial schema
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).
-- It is idempotent-ish: safe to run once on a fresh project.
-- ============================================================

-- ---------- enums ----------
do $$ begin
  create type space as enum ('public', 'members');
exception when duplicate_object then null; end $$;

do $$ begin
  create type post_status as enum ('draft', 'published');
exception when duplicate_object then null; end $$;

-- ---------- profiles (mirror of auth.users) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  role text not null default 'owner',
  created_at timestamptz not null default now()
);

-- Auto-create a profile row whenever a user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- assets (uploaded materials) ----------
create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text default '',
  space space not null default 'public',
  storage_bucket text not null,
  storage_path text not null,
  file_name text not null,
  file_type text,
  file_size bigint,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists assets_space_published_idx
  on public.assets (space, published);

-- ---------- posts (newsletter / thoughts) ----------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text default '',
  content_json jsonb,
  content_html text default '',
  space space not null default 'public',
  status post_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists posts_space_status_idx
  on public.posts (space, status);

-- ---------- downloads (analytics event log) ----------
create table if not exists public.downloads (
  id bigint generated always as identity primary key,
  asset_id uuid not null references public.assets (id) on delete cascade,
  created_at timestamptz not null default now(),
  referrer text,
  country text,
  user_agent text
);
create index if not exists downloads_asset_idx on public.downloads (asset_id);
create index if not exists downloads_created_idx on public.downloads (created_at);

-- ---------- updated_at trigger ----------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists assets_touch on public.assets;
create trigger assets_touch before update on public.assets
  for each row execute function public.touch_updated_at();

drop trigger if exists posts_touch on public.posts;
create trigger posts_touch before update on public.posts
  for each row execute function public.touch_updated_at();

-- ============================================================
-- Row Level Security
-- Reads are allowed for published/public content (anon) and everything for
-- authenticated users. ALL writes + download logging go through the
-- service-role key on the server, which bypasses RLS — so no write policies.
-- ============================================================
alter table public.profiles  enable row level security;
alter table public.assets    enable row level security;
alter table public.posts     enable row level security;
alter table public.downloads enable row level security;

-- assets: anon sees published public; authenticated sees all
drop policy if exists assets_public_read on public.assets;
create policy assets_public_read on public.assets
  for select to anon
  using (space = 'public' and published = true);

drop policy if exists assets_auth_read on public.assets;
create policy assets_auth_read on public.assets
  for select to authenticated using (true);

-- posts: anon sees published public; authenticated sees all
drop policy if exists posts_public_read on public.posts;
create policy posts_public_read on public.posts
  for select to anon
  using (space = 'public' and status = 'published');

drop policy if exists posts_auth_read on public.posts;
create policy posts_auth_read on public.posts
  for select to authenticated using (true);

-- profiles: a user can read their own row
drop policy if exists profiles_self_read on public.profiles;
create policy profiles_self_read on public.profiles
  for select to authenticated using (auth.uid() = id);

-- downloads: no anon/authenticated access (service role only, which bypasses RLS)

-- ============================================================
-- Storage buckets
-- ============================================================
insert into storage.buckets (id, name, public)
values ('public-assets', 'public-assets', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('members-assets', 'members-assets', false)
on conflict (id) do nothing;

-- Anyone can read objects in the public bucket.
drop policy if exists "public assets readable" on storage.objects;
create policy "public assets readable" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'public-assets');
-- The private 'members-assets' bucket is reached only via signed URLs
-- generated server-side, so it needs no public policy.

/**
 * Central place to read Supabase env + owner identity.
 *
 * The site must keep rendering its static "knowledge" pages even before a
 * Supabase project exists, so everything funnels through `isSupabaseConfigured`
 * and the dynamic surfaces degrade to a friendly "not set up yet" state.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

/** The single owner allowed into /members and /admin (for now). */
export const OWNER_EMAIL = (process.env.OWNER_EMAIL ?? "").toLowerCase();

/** True once the public client envs are present. */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/** True once server-side privileged operations are possible. */
export const isAdminConfigured = Boolean(
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
);

export const STORAGE_BUCKETS = {
  public: "public-assets",
  members: "members-assets",
} as const;

export type Space = "public" | "members";

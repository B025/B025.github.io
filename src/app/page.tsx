import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Compass, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { practices, books, aiTools, disciplines } from "@/lib/content";

export default function Home() {
  const essentialBooks = books.filter((b) => b.essential);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-secondary/80 to-transparent"
        />
        <div className="mx-auto max-w-4xl px-5 pt-24 pb-16 text-center md:pt-36 md:pb-24">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-3 py-1 text-[12px] font-medium text-muted-foreground"
          >
            <Sparkles className="size-3" />
            Product marketing &amp; go-to-market for SaaS
          </Badge>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            The craft of PMM,
            <br />
            <span className="text-muted-foreground">collected and shared.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A clean, curated home for the best practices, reading and tools
            behind great go-to-market — and a living experiment in building an
            agentic marketing team.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/best-practices" />}
              nativeButton={false}
              size="lg"
              className="h-11 rounded-full px-6 text-[15px]"
            >
              Explore best practices
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/newsletter" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="h-11 rounded-full px-6 text-[15px]"
            >
              Read the newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Workspaces */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <WorkspaceCard
            icon={<Compass className="size-5" />}
            title="The Hub"
            description="The public knowledge base — practices, reading, AI tooling and the agentic-team vision."
            href="/best-practices"
            cta="Browse the hub"
          />
          <WorkspaceCard
            icon={<BookOpen className="size-5" />}
            title="My Learning"
            description="A curated path — the resources and practices I'd hand a new PMM on day one."
            href="/learning"
            cta="Start learning"
          />
          <WorkspaceCard
            icon={<Lock className="size-5" />}
            title="Studio"
            description="The private backend for draft ideas, unfinished notes and content management."
            href="/studio"
            cta="Open Studio"
            muted
          />
        </div>
      </section>

      {/* Best practices */}
      <Section
        eyebrow="Best practices"
        title="The fundamentals, done well"
        description="The handful of disciplines that separate good product marketing from noise."
        href="/best-practices"
        linkLabel="All best practices"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <Card key={p.slug} className="border-border/70 bg-card transition-shadow hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {p.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reading */}
      <div className="bg-secondary/50">
        <Section
          eyebrow="Recommended reading"
          title="Stand on the right shoulders"
          description="The books that shaped how I think about positioning, messaging and category."
          href="/literature"
          linkLabel="Full reading list"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {essentialBooks.map((b) => (
              <Card key={b.title} className="border-border/70 bg-card">
                <CardHeader>
                  <Badge variant="secondary" className="mb-1 w-fit rounded-full text-[11px]">
                    {b.topic}
                  </Badge>
                  <CardTitle className="text-lg">{b.title}</CardTitle>
                  <CardDescription className="text-[13px] font-medium text-foreground/70">
                    {b.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.why}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      {/* AI tooling */}
      <Section
        eyebrow="AI tooling"
        title="What actually works for PMM"
        description="An honest, evolving take on the models I reach for — and what each is good at."
        href="/ai"
        linkLabel="All AI notes"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {aiTools.map((t) => (
            <Card key={t.name} className="border-border/70 bg-card">
              <CardHeader>
                <div className="mb-1 flex items-center justify-between">
                  <Bot className="size-5 text-primary" />
                  <Badge variant="secondary" className="rounded-full text-[11px]">
                    {t.rating}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{t.name}</CardTitle>
                <CardDescription>{t.vendor}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {t.bestFor.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Agentic team */}
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-sm font-medium text-background/60">The vision</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            An agentic team for every marketing discipline.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
            Each discipline as its own specialised agent, coordinated around a
            shared narrative — strategy to enablement, working as one team.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl border border-background/15 bg-background/5 p-5"
              >
                <h3 className="text-base font-semibold">{d.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-background/60">
                  {d.role}
                </p>
              </div>
            ))}
          </div>
          <Button
            render={<Link href="/agentic-team" />}
            nativeButton={false}
            size="lg"
            variant="secondary"
            className="mt-10 h-11 rounded-full px-6 text-[15px]"
          >
            Explore the vision
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Tips, thoughts, and the occasional strong opinion.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A short newsletter on product marketing craft. No fluff, no feature
          lists.
        </p>
        <div className="mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

function WorkspaceCard({
  icon,
  title,
  description,
  href,
  cta,
  muted,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  cta: string;
  muted?: boolean;
}) {
  return (
    <Card
      className={`group flex flex-col justify-between border-border/70 ${
        muted ? "bg-secondary/60" : "bg-card"
      }`}
    >
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:gap-1.5"
        >
          {cta}
          <ArrowRight className="size-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}

function Section({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">{eyebrow}</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:gap-1.5"
        >
          {linkLabel}
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      {children}
    </section>
  );
}

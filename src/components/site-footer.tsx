import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              The PMM Hub
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              A curated home for product marketing and go-to-market craft for
              SaaS — and an experiment in building an agentic marketing team.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-6 text-[13px]">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground">Explore</span>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground">Workspaces</span>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                The Hub
              </Link>
              <Link href="/learning" className="text-muted-foreground hover:text-foreground">
                My Learning
              </Link>
              <Link href="/studio" className="text-muted-foreground hover:text-foreground">
                Studio (private)
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground">Resources</span>
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="size-3.5" />
                Git repos
              </Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                PDFs &amp; decks
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The PMM Hub. A personal knowledge space.</p>
          <p>Built with Next.js, Tailwind &amp; shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}

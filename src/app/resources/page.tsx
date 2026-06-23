import type { Metadata } from "next";
import { FileText, Presentation } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources",
  description: "Shared PDFs, presentations and git repositories.",
};

const resources = [
  {
    type: "PDF",
    icon: <FileText className="size-5 text-primary" />,
    title: "Positioning worksheet",
    note: "A fill-in worksheet based on the Obviously Awesome framework.",
  },
  {
    type: "Deck",
    icon: <Presentation className="size-5 text-primary" />,
    title: "Launch tiering template",
    note: "The T1/T2/T3 launch brief and checklist as a slide template.",
  },
  {
    type: "Repo",
    icon: <GithubIcon className="size-5 text-primary" />,
    title: "Agentic team prototypes",
    note: "Experiments in coordinating discipline agents (linked when public).",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Resources"
        title="Templates, decks &amp; repos"
        description="Downloadable PDFs, presentation templates and git repositories. For now this is a private library — useful pieces get shared here as they're ready."
      />

      <div className="mx-auto max-w-3xl px-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((r) => (
            <Card key={r.title} className="border-border/70 bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {r.icon}
                  <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {r.type}
                  </span>
                </div>
                <CardTitle className="text-base">{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {r.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          File uploads and downloads are wired up in a later phase via Studio.{" "}
          <Link href="/studio" className="text-primary hover:underline">
            Open Studio
          </Link>
        </p>
      </div>
    </div>
  );
}

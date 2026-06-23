import type { Metadata } from "next";
import { Lock, FileText, BookOpen, Newspaper, Boxes } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  privateNotes,
  practices,
  books,
  posts,
  disciplines,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio (private)",
  description: "Private backend workspace for drafts, notes and content management.",
  robots: { index: false, follow: false },
};

const statusStyles: Record<string, string> = {
  idea: "bg-secondary text-muted-foreground",
  drafting: "bg-primary/10 text-primary",
  "needs-review": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
};

export default function StudioPage() {
  const stats = [
    { label: "Best practices", value: practices.length, icon: <Boxes className="size-4" /> },
    { label: "Books", value: books.length, icon: <BookOpen className="size-4" /> },
    { label: "Newsletter posts", value: posts.length, icon: <Newspaper className="size-4" /> },
    { label: "Discipline agents", value: disciplines.length, icon: <FileText className="size-4" /> },
  ];

  return (
    <div className="pb-24">
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-5 py-2.5 text-[13px] text-muted-foreground">
          <Lock className="size-3.5" />
          Private workspace — visible to you only. Authentication &amp;
          persistence land in a later phase.
        </div>
      </div>

      <PageHero
        eyebrow="Studio"
        title="Your private backend"
        description="Draft ideas, unfinished notes and the controls for managing what the public Hub shows."
      />

      <div className="mx-auto max-w-5xl px-5">
        {/* Content overview */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border/70 bg-card">
              <CardContent className="py-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  {s.icon}
                  <span className="text-[13px]">{s.label}</span>
                </div>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {s.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Private notes */}
        <h2 className="mt-14 mb-4 text-xl font-semibold tracking-tight">
          Private notes &amp; drafts
        </h2>
        <div className="grid gap-4">
          {privateNotes.map((note) => (
            <Card key={note.id} className="border-border/70 bg-card">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-base">{note.title}</CardTitle>
                  <Badge
                    className={`rounded-full border-transparent text-[11px] capitalize ${statusStyles[note.status]}`}
                  >
                    {note.status.replace("-", " ")}
                  </Badge>
                </div>
                <CardDescription className="font-mono text-[11px]">
                  {note.id} · updated {note.updated}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {note.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-border p-6 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">Phase 2 roadmap for Studio</p>
          <ul className="mt-3 space-y-1.5">
            <li>· Sign-in so this workspace is genuinely private</li>
            <li>· Editable content (write straight to the Hub from here)</li>
            <li>· Upload &amp; manage PDFs and decks</li>
            <li>· Moderate reader comments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

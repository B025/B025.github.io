import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { disciplines } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Agentic Marketing Team",
  description:
    "The vision: a coordinated team of specialised AI agents, one per marketing discipline, working from a shared narrative.",
};

export default function AgenticTeamPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="The vision"
        title="An agentic team for every discipline"
        description="Where this is heading: each marketing discipline as its own specialised agent, coordinated around a single shared narrative — from strategy through to enablement."
      />

      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {disciplines.map((d, i) => (
            <Card key={d.name} className="border-border/70 bg-card">
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="mb-1 w-fit rounded-full font-mono text-[11px]"
                >
                  Agent {String(i + 1).padStart(2, "0")}
                </Badge>
                <CardTitle className="text-lg">{d.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/70 bg-secondary/50 p-8 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it fits together
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            A coordinating layer holds the positioning and narrative. Each
            discipline agent works from that shared source, hands off to the
            next, and feeds learnings back in. The goal isn&apos;t to replace the
            marketer — it&apos;s to give one person the leverage of a full team.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            Status: early experiment — notes and prototypes live in Studio.
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Bot, TriangleAlert } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aiTools } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Tooling for PMM",
  description:
    "An honest, evolving take on which AI models work for product marketing tasks — and where each one falls short.",
};

export default function AiPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="AI tooling"
        title="What actually works for PMM"
        description="A working log of the models I reach for, what each is genuinely good at, and the traps to avoid. Opinionated and updated as the tools change."
      />

      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-5 md:grid-cols-3">
          {aiTools.map((t) => (
            <Card key={t.name} className="flex flex-col border-border/70 bg-card">
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
              <CardContent className="flex flex-1 flex-col">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Best for
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {t.bestFor.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-secondary/70 p-3 text-sm text-muted-foreground">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0 text-foreground/60" />
                  <span>{t.watchOut}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          A note on method: the model matters less than the brief. Give any of
          these your positioning, your audience and a few strong examples, and
          the output improves dramatically.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { learningPath } from "@/lib/content";

export const metadata: Metadata = {
  title: "My Learning",
  description:
    "A curated learning path for product marketing — the order I'd recommend a new PMM tackle the fundamentals.",
};

export default function LearningPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="My Learning"
        title="Where I'd start"
        description="A curated path through the fundamentals — the order I'd hand a new PMM or marketer who wants to get good, fast."
      />

      <div className="mx-auto max-w-2xl px-5">
        <ol className="relative flex flex-col gap-4 border-l border-border pl-8">
          {learningPath.map((step) => (
            <li key={step.step} className="relative">
              <span className="absolute -left-[2.6rem] flex size-7 items-center justify-center rounded-full bg-primary text-[13px] font-semibold text-primary-foreground">
                {step.step}
              </span>
              <Card className="border-border/70 bg-card">
                <CardContent className="py-5">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-border/70 bg-secondary/50 p-6 text-sm leading-relaxed text-muted-foreground">
          This is a living path. As I find resources worth sharing more
          broadly, they graduate from here into the public Hub.
        </div>
      </div>
    </div>
  );
}

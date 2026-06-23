import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { practices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Practices",
  description:
    "The core product marketing disciplines — positioning, messaging, GTM strategy, launches, enablement and market intelligence.",
};

export default function BestPracticesPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Best practices"
        title="The fundamentals, done well"
        description="The disciplines that separate good product marketing from noise — with the takeaways that actually move the needle."
      />

      <div className="mx-auto max-w-4xl px-5">
        <div className="grid gap-4">
          {practices.map((p) => (
            <Card key={p.slug} className="border-border/70 bg-card">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <Accordion type="single" collapsible className="mt-2">
                  <AccordionItem value="takeaways" className="border-b-0">
                    <AccordionTrigger className="py-3 text-sm font-medium text-primary hover:no-underline">
                      Key takeaways
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {p.takeaways.map((t) => (
                          <li
                            key={t}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

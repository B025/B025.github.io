import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { books } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recommended Reading",
  description:
    "A curated reading list on positioning, messaging, category and advertising craft — from April Dunford to David Ogilvy.",
};

export default function LiteraturePage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Recommended reading"
        title="Stand on the right shoulders"
        description="The books that shaped how I think about positioning, messaging, category and the craft of persuasion. Starred titles are the essentials."
      />

      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {books.map((b) => (
            <Card key={b.title} className="border-border/70 bg-card">
              <CardHeader>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="rounded-full text-[11px]">
                    {b.topic}
                  </Badge>
                  {b.essential ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                      <Star className="size-3 fill-primary" />
                      Essential
                    </span>
                  ) : null}
                </div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription className="font-medium text-foreground/70">
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
      </div>
    </div>
  );
}

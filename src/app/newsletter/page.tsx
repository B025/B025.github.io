import type { Metadata } from "next";
import { ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { NewsletterForm } from "@/components/newsletter-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Short, opinionated notes on product marketing craft — positioning, messaging, launches and go-to-market.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsletterPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Newsletter"
        title="Tips, thoughts, strong opinions"
        description="Short notes on the craft of product marketing. No fluff, no feature lists — just what I'm learning and arguing about."
      />

      <div className="mx-auto max-w-2xl px-5">
        <div className="rounded-3xl border border-border/70 bg-secondary/50 p-6 text-center md:p-8">
          <p className="font-medium">Get new issues in your inbox</p>
          <div className="mt-4 flex justify-center">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group border-border/70 bg-card transition-shadow hover:shadow-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime} read</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-1.5">
                    Read issue
                    <ArrowRight className="size-3.5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                    <MessageSquare className="size-3.5" />
                    Comments
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          Comments and full issue pages are coming in a later phase.
        </p>
      </div>
    </div>
  );
}

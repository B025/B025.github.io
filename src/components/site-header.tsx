"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          The PMM Hub
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] text-muted-foreground transition-colors hover:text-foreground",
                isActive(item.href) && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/learning"
            className={cn(
              "text-[13px] text-muted-foreground transition-colors hover:text-foreground",
              isActive("/learning") && "text-foreground"
            )}
          >
            My Learning
          </Link>
          <Button
            render={<Link href="/studio" />}
            nativeButton={false}
            size="sm"
            variant="secondary"
            className="h-7 rounded-full px-3 text-[12px]"
          >
            <Lock className="size-3" />
            Studio
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="size-8" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>The PMM Hub</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <Link
                  href="/learning"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  My Learning
                </Link>
                <Link
                  href="/studio"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Lock className="size-3.5" />
                  Studio
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

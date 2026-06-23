"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Placeholder: wire to an email provider / Studio backend later.
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("You're on the list", {
        description: "Thanks for subscribing — first issue coming soon.",
      });
    }, 600);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full max-w-md flex-col gap-2.5 sm:flex-row ${className ?? ""}`}
    >
      <Input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 rounded-full bg-card px-5"
        aria-label="Email address"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-11 rounded-full px-6"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}

"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, MailCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function LoginForm() {
  const params = useSearchParams();
  const next = params.get("next") || "/admin";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(
      next
    )}`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
    } else {
      setStatus("sent");
    }
  }

  if (!isSupabaseConfigured) {
    return (
      <Card className="w-full max-w-sm border-border/70">
        <CardHeader>
          <CardTitle className="text-xl">Not set up yet</CardTitle>
          <CardDescription>
            Sign-in turns on once Supabase keys are added to{" "}
            <code className="font-mono text-[13px]">.env.local</code>. The
            public knowledge pages work without it.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (status === "sent") {
    return (
      <Card className="w-full max-w-sm border-border/70 text-center">
        <CardHeader>
          <div className="mx-auto mb-2 flex size-11 items-center justify-center rounded-full bg-secondary">
            <MailCheck className="size-5 text-primary" />
          </div>
          <CardTitle className="text-xl">Check your email</CardTitle>
          <CardDescription>
            We sent a magic sign-in link to{" "}
            <span className="font-medium text-foreground">{email}</span>.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm border-border/70">
      <CardHeader>
        <div className="mb-2 flex size-11 items-center justify-center rounded-full bg-secondary">
          <Lock className="size-5" />
        </div>
        <CardTitle className="text-xl">Sign in</CardTitle>
        <CardDescription>
          Enter your email and we&apos;ll send a magic link — no password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11"
            />
          </div>
          {status === "error" ? (
            <p className="text-sm text-destructive">{message}</p>
          ) : null}
          <Button
            type="submit"
            disabled={status === "sending"}
            className="h-11 w-full rounded-full"
          >
            {status === "sending" ? "Sending…" : "Send magic link"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-16">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}

import type { User } from "@supabase/supabase-js";
import { OWNER_EMAIL } from "./supabase/config";

/**
 * Is this user the site owner?
 * If OWNER_EMAIL is unset (early dev), any authenticated user counts as owner
 * since the site is single-user for now.
 */
export function isOwner(user: User | null | undefined): boolean {
  if (!user?.email) return false;
  if (!OWNER_EMAIL) return true;
  return user.email.toLowerCase() === OWNER_EMAIL;
}

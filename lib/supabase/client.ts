// Optional Supabase integration point.
//
// The app runs fine without this — every page reads from lib/data.ts by
// default. Wire this up only once you've created your own Supabase project
// and added SUPABASE_URL / SUPABASE_ANON_KEY to .env.local.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  if (!client) {
    client = createClient(url, key);
  }

  return client;
}

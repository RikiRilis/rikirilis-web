import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	import.meta.env.SECRET_SUPABASE_URL,
	import.meta.env.SECRET_SUPABASE_ANON_KEY
);

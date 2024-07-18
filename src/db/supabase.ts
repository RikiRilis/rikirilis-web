import type { Story } from "@/interfaces/story";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	import.meta.env.SUPABASE_URL,
	import.meta.env.SUPABASE_ANON_KEY
);

export const insertRow = async ({ title, content, lang, tags }: Story) => {
	const { error } = await supabase.from("web_stories").insert({
		title: title,
		content: content,
		tags: tags,
		lang: lang,
	});

	if (error) return false;
	return true;
};

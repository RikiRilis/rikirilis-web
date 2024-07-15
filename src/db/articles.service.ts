import { createClient, type PostgrestSingleResponse } from "@supabase/supabase-js";
import { type Article } from "@/interfaces/article.interface";

const getSupabaseClient = () => {
	return createClient<Article>(
		import.meta.env.SECRET_SUPABASE_URL,
		import.meta.env.SECRET_SUPABASE_ANON_KEY
	);
};

export const articlesService = async (): Promise<PostgrestSingleResponse<Article[]> | null> => {
	const data: PostgrestSingleResponse<Article[]> | null = await getSupabaseClient()
		.from("web_stories")
		.select();

	if (data.error !== null) return null;

	return data;
};

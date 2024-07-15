import { createClient, type PostgrestSingleResponse } from "@supabase/supabase-js";
import { type Story } from "@/interfaces/story.interface";

const getSupabaseClient = () => {
	return createClient<Story>(
		import.meta.env.SECRET_SUPABASE_URL,
		import.meta.env.SECRET_SUPABASE_ANON_KEY
	);
};

export const storiesService = async (): Promise<PostgrestSingleResponse<Story[]> | null> => {
	const data: PostgrestSingleResponse<Story[]> | null = await getSupabaseClient()
		.from("web_stories")
		.select();

	if (data.error !== null) return null;

	return data;
};

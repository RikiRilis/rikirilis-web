/// <reference types="astro/client" />

interface Window {
	getThemePreference(): "dark" | "light";
}

interface ImportMetaEnv {
	readonly SECRET_SUPABASE_URL: string;
	readonly SECRET_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

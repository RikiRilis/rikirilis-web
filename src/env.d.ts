/// <reference types="astro/client" />

interface Window {
	getThemePreference(): "dark" | "light";
}

interface ImportMetaEnv {
	readonly SUPABASE_URL: string;
	readonly SUPABASE_ANON_KEY: string;
	readonly EMAILJS_KEY: string;
	readonly EMAILJS_SERVICE_ID: string;
	readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

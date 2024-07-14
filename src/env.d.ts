/// <reference types="astro/client" />

interface Window {
	getThemePreference(): "dark" | "light";
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/// <reference types="astro/client" />

interface Window {
	getThemePreference(): 'dark' | 'light'
}

interface ImportMetaEnv {
	readonly EMAILJS_KEY: string
	readonly EMAILJS_SERVICE_ID: string
	readonly EMAILJS_TEMPLATE_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

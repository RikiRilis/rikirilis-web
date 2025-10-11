/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { ToastOptions } from './lib/toast'

interface Window {
	getThemePreference(): 'dark' | 'light'
	toast({ ToastOptions }: ToastOptions): void
}

interface ImportMetaEnv {
	readonly EMAILJS_KEY: string
	readonly EMAILJS_SERVICE_ID: string
	readonly EMAILJS_TEMPLATE_ID: string
	readonly RESEND_API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	interface Window {
		getThemePreference: function
		toast: function
	}
}

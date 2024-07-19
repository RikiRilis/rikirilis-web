import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import * as dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		define: {
			"import.meta.env.EMAILJS_KEY": JSON.stringify(process.env.EMAILJS_KEY),
			"import.meta.env.EMAILJS_SERVICE_ID": JSON.stringify(process.env.EMAILJS_SERVICE_ID),
			"import.meta.env.EMAILJS_TEMPLATE_ID": JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
		},
	},
});

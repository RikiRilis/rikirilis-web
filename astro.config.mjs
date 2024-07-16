import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import * as dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	devToolbar: false,
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
});

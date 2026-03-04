import { type Config } from "prettier";
import { type PluginOptions } from "prettier-plugin-tailwindcss";

const config: Config & PluginOptions = {
	printWidth: 100,
	useTabs: true,
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./resources/css/app.css",
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
	svelteStrictMode: true,
};

export default config;

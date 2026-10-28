import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const site = process.env.SITE_URL || "https://fcoelhomrc.github.io";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: "rose-pine-moon" },
  },
});

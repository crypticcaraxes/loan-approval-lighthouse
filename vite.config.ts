
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Build the server for Netlify instead of Cloudflare
  nitro: {
    preset: "netlify",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});

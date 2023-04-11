import { defineNitroConfig } from "nitropack";
export default defineNuxtConfig({
  css: ["/assets/style.css"],
  app: {
    head: {
      title: "EW-Stage4",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
    },
  },
});

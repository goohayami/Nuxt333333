export default defineNuxtConfig({
  css: ["/assets/style.css"],
  app: {
    head: {
      title: "English Words",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
    },
  },
  // nitro: {
  //   prerender: {
  //     routes: ["/", "/verbs", "/nouns1", "/nouns2"],
  //   },
  // },
});

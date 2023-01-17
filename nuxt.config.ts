// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: ["/assets/css/style.css", "bootstrap/dist/css/bootstrap.min.css"],
  head: {
    title: "CocoaColor",
    htmlAttrs: { lang: "ja" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};

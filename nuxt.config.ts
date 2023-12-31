// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    '@element-plus/nuxt'

  ],
  
});

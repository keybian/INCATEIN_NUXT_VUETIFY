import vuetify from "./plugins/vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css:[
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build:{
    transpile:['vuetify']
  },
  modules:['@pinia/nuxt'],
  runtimeConfig:{
    MONGO_URI:process.env.MONGO_URI
  }
  
})
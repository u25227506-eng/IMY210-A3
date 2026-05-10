// Matshidiso Dibakoane - u25227506
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      strapiUrl: 'http://localhost:1337'
    }
  },
  css: ['./app/assets/css/main.css']
})
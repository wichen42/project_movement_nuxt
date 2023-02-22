// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: ['@nuxtjs/tailwindcss'],
     app: {
          head: {
               title: 'PRJCT_MVMT',
               meta: [
                    {
                         name: 'description', content: 'PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better!'
                    }
               ],
               link: [
                    {
                         rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&family=Montserrat:wght@700&display=swap'
                    }
               ]
          }
     }
})



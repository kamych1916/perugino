
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Perugino — digital studio | Branding & Websites & Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},
      { property: 'og:url', content: 'http://perugino.club/'},
      { property: 'og:title', content: 'Perugino — digital studio | Branding & Websites & Marketing'},
      { property: 'og:description', content: 'Мы — digital студия, которая помогает бзнесу выделяться, разрабатываем качественный продукт. Брендинг & Маркетинг & Веб-сайты' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'http://krakhimov.site/_nuxt/img/heading__img.89f6abe.png'},

      { property: 'twitter:title', content: 'Perugino — digital studio | Branding & Websites & Marketing'},
      { property: 'twitter:description', content: 'Мы — digital студия, которая помогает бзнесу выделяться, разрабатываем качественный продукт. Брендинг & Маркетинг & Веб-сайты' },
      { property: 'twitter:image', content: 'http://krakhimov.site/_nuxt/img/heading__img.89f6abe.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/b-icons',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 600 }],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

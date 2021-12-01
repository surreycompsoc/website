export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CompSoc — University of Surrey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official Computer Science departmental society for the University of Surrey and the University of Surrey Students\' Union.' },
      { name: 'format-detection', content: 'telephone=no' },

      { name: 'robots', content: 'index, follow' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'CompSoc – University of Surrey' },
      { name: 'og:url', content: 'https://surreycompsoc.org/' },
      { name: 'og:image', content: "https://surreycompsoc.org/opengraph.png" },
      { name: 'og:description', content: "The official Computer Science departmental society for the University of Surrey and the University of Surrey Students' Union." },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'CompSoc – University of Surrey' },
      { name: 'twitter:site', content: '@surreycompsoc' },
      { name: 'twitter:description', content: "The official Computer Science departmental society for the University of Surrey and the University of Surrey Students' Union." },
      { name: 'twitter:image', content: "https://surreycompsoc.org/icon.png" },
      { name: 'twitter:image:alt', content: "Surrey CompSoc Logo" },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },

  // Set the transition used for switching between layouts.
  layoutTransition: 'layout',
  // Set the default transition used for switching between pages.
  pageTransition: 'page',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Style resources
  styleResources: {
    scss: [
      '~/assets/styles/_global_inject.scss'
    ],
    hoistUseStatements: true,
  }
}

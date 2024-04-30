
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'weather',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og-description',
        property: 'og:description',
        content: `weatherapp,downloads and launches AWeather,sets an alarm of weather events,gets notification,Snow / Rainy,Thunderstorm`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/HeadLogo.svg' }
    ]
  },
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/main.scss',
  ],
  server: {
    port: 3030,
    host: "0.0.0.0"
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    "@/plugins/axios.js",
    '@/plugins/aos.client.js'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
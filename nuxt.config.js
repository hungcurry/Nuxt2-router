export default {
  ssr: true, // SSR打開 關閉就是SPA
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt2-router',
    htmlAttrs: {
      lang: 'zh-Hant-Tw'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // 禁止ios蘋果 將電話號碼轉成連結
      { name: 'format-detection', content: 'telephone=no' },
      // 網址列顏色 
      { name: 'theme-color', content: '#4285f4' },
      // 網頁描述
      { hid: 'description', name: 'description', content: '網站描述文字' },
      // og: FB設定 
      { property: 'og:title', content: 'FB的標題' },
      { property: 'og:description', content: 'FB的描述' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'FB上的網址' },
      { property: 'og:image', content: 'FB的圖片' },
    ],
  },

  // loading Bar
  // 預設修改
  // loading: {
  //   color: 'blue',
  //   height: '10px'
  // },
  // 客制化用元件方式
  loading: '~/components/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/notifications.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/demo.js",
    "~/plugins/axios.js",
    "~/plugins/notification.js",
    "~/plugins/localStorage.js",
    "~/plugins/cookie.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}


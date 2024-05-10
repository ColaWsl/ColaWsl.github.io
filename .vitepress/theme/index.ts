// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from "./Layout.vue";


import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    // return h(DefaultTheme.Layout, null, {
    //   // https://vitepress.dev/guide/extending-default-theme#layout-slots
    // })
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
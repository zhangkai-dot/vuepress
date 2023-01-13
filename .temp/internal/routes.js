/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Webstrom project\\vuepress-starter\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-42d6d252",
    path: "/Frontend/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-42d6d252").then(next)
    },
  },
  {
    path: "/Frontend/index.html",
    redirect: "/Frontend/"
  },
  {
    name: "v-0ef745b4",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0ef745b4").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5c0c3b89",
    path: "/Tools/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5c0c3b89").then(next)
    },
  },
  {
    path: "/Tools/index.html",
    redirect: "/Tools/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]
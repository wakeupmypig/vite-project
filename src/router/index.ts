// 项目比较小，可以采用约定式路由 根据规范来创建目录
// 项目比较大，建议采用配置

import { createRouter, createWebHistory } from "vue-router"

// webpack require.context
const getRoutes = () => {
  const files = import.meta.glob("../views/*.vue")
  //../views/about.vue: () => import("/src/views/about.vue")
  // ../views/home.vue: () => import("/src/views/home.vue")
  return Object.entries(files).map(([file, module]) => {
    const name = file.match(/\.\.\/views\/([^.]+?)\.vue/i)?.[1]
    return {
      path: "/" + name,
      component: module
    }
  })
}

export default createRouter({
  history: createWebHistory(),
  routes: getRoutes()
})

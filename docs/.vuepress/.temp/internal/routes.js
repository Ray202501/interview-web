export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/JavaScript/prototype.html", { loader: () => import(/* webpackChunkName: "JavaScript_prototype.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/prototype.html.js"), meta: {"title":"面试官：JavaScript原型，原型链 ? 有什么特点？"} }],
  ["/algorithm/Algorithm.html", { loader: () => import(/* webpackChunkName: "algorithm_Algorithm.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/algorithm/Algorithm.html.js"), meta: {"title":"面试官：说说你对算法的理解？应用场景？"} }],
  ["/algorithm/BinarySearch.html", { loader: () => import(/* webpackChunkName: "algorithm_BinarySearch.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/algorithm/BinarySearch.html.js"), meta: {"title":"面试官：说说你对二分查找的理解？如何实现？应用场景？"} }],
  ["/html5/feature.html", { loader: () => import(/* webpackChunkName: "html5_feature.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/html5/feature.html.js"), meta: {"title":"HTML5"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/JavaScript/bind_call_apply.html", { loader: () => import(/* webpackChunkName: "JavaScript_bind_call_apply.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/bind_call_apply.html.js"), meta: {"title":"问题：bind、call、apply 区别？如何实现一个bind?"} }],
  ["/JavaScript/closure.html", { loader: () => import(/* webpackChunkName: "JavaScript_closure.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/closure.html.js"), meta: {"title":"问题：说说你对闭包的理解？闭包使用场景"} }],
  ["/JavaScript/data_type.html", { loader: () => import(/* webpackChunkName: "JavaScript_data_type.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/data_type.html.js"), meta: {"title":"问题：说说JavaScript中的数据类型？存储上的差别？"} }],
  ["/JavaScript/event_Model.html", { loader: () => import(/* webpackChunkName: "JavaScript_event_Model.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/event_Model.html.js"), meta: {"title":"问题：说说JavaScript中的事件模型"} }],
  ["/JavaScript/event_agent.html", { loader: () => import(/* webpackChunkName: "JavaScript_event_agent.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/event_agent.html.js"), meta: {"title":"问题：解释下什么是事件代理？应用场景？"} }],
  ["/JavaScript/event_loop.html", { loader: () => import(/* webpackChunkName: "JavaScript_event_loop.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/event_loop.html.js"), meta: {"title":"问题：说说你对事件循环的理解"} }],
  ["/JavaScript/inherit.html", { loader: () => import(/* webpackChunkName: "JavaScript_inherit.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/inherit.html.js"), meta: {"title":"问题：Javascript如何实现继承？"} }],
  ["/JavaScript/prototype.html", { loader: () => import(/* webpackChunkName: "JavaScript_prototype.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/prototype.html.js"), meta: {"title":"问题：JavaScript原型，原型链 ? 有什么特点？"} }],
  ["/JavaScript/scope.html", { loader: () => import(/* webpackChunkName: "JavaScript_scope.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/JavaScript/scope.html.js"), meta: {"title":"问题：说说你对作用域链的理解"} }],
  ["/algorithm/Algorithm.html", { loader: () => import(/* webpackChunkName: "algorithm_Algorithm.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/algorithm/Algorithm.html.js"), meta: {"title":"面试官：说说你对算法的理解？应用场景？"} }],
  ["/algorithm/BinarySearch.html", { loader: () => import(/* webpackChunkName: "algorithm_BinarySearch.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/algorithm/BinarySearch.html.js"), meta: {"title":"面试官：说说你对二分查找的理解？如何实现？应用场景？"} }],
  ["/guide/hr.html", { loader: () => import(/* webpackChunkName: "guide_hr.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/guide/hr.html.js"), meta: {"title":"如何通过HR面"} }],
  ["/guide/resume.html", { loader: () => import(/* webpackChunkName: "guide_resume.html" */"/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/guide/resume.html.js"), meta: {"title":"面试官到底想看什么样的简历？"} }],
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

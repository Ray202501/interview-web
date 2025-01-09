import comp from "/Users/ray/project/interview-web/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"HTML5\",\"link\":\"/html5/feature.html\",\"type\":\"secondary\"},{\"text\":\"JavaScript\",\"link\":\"/JavaScript/prototype.html\",\"type\":\"secondary\"},{\"text\":\"NodeJS\",\"link\":\"/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"算法\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"Vue3\",\"link\":\"/algorithm/Algorithm.html\",\"type\":\"secondary\"},{\"text\":\"React\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"Typescript\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"Webpack & Vite\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"CI/CD\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"},{\"text\":\"Electron & ReactNative\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1736335528000,\"contributors\":[{\"name\":\"Ray202501\",\"username\":\"Ray202501\",\"email\":\"liumo.ok@163.com\",\"commits\":1,\"url\":\"https://github.com/Ray202501\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

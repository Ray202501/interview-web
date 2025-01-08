import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '前端面试题总结',
  description: '梳理前端知识结构',
  theme: defaultTheme({
    navbar: [
      {
        text: 'JavaScript',
        link: 'JavaScript/prototype',
      },
      {
        text: 'Vue3',
        link: '/get-started',
      },
      {
        text: '算法',
        prefix: 'algorithm/',
        children: ['Algorithm', 'BinarySearch']
      }
    ],
  }),

  bundler: viteBundler(),
});

import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '前端面试题总结',
  description: '梳理前端知识结构',
  theme: defaultTheme({
    sidebar: [
      {
        text: '面试技巧',
        prefix: 'guide/',
        children: ['resume', 'hr']
      },
      {
        text: 'HTML5系列',
        link: 'html5/feature',
      },
      {
        text: 'JavaScript系列',
        prefix: 'JavaScript/',
        children: ['data_type', 'prototype', 'scope','bind_call_apply','closure', 'event_agent','event_loop','event_Model']
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

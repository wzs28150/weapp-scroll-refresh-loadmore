import { defineConfig } from 'vitepress'
import info from '../../packages/package.json'
// console.log(info.version)
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'coolui-scroller',
  description: 'coolui-scroller',
  base: '/coolui-scroller/v3/',
  outDir: '../v3/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      {
        text: '组件',
        link: '/components/scroller.md',
      },
      {
        text: '示例',
        items: [
          {
            text: '有趣的下拉',
            link: '/case/case',
          },
          {
            text: '下拉组合',
            link: '/case/case2',
          },
          {
            text: '下拉二楼',
            link: '/case/case3',
          },
        ],
      },
      { text: '社群', link: '/community' },
      { text: '赞助', link: '/sponsors' },
      {
        text: 'v' + info.version,
        items: [
          {
            text: 'v3.3.8',
            link: '/version.md#v3-3-8',
          },
          {
            text: 'v3.3.7',
            link: '/version.md#v3-3-7',
          },
          {
            text: 'v3.3.6',
            link: '/version.md#v3-3-6',
          },
          {
            text: 'v3.3.4',
            link: '/version.md#v3-3-4',
          },
          {
            text: 'v3.3.3',
            link: '/version.md#v3-3-3',
          },
          {
            text: 'v3.3.2',
            link: '/version.md#v3-3-2',
          },
          {
            text: 'v3.3.1',
            link: '/version.md#v3-3-1',
          },
          {
            text: 'v3.3.0',
            link: '/version.md#v3-3-0',
          },
          {
            text: 'v3.2.9',
            link: '/version.md#v3-2-9',
          },
          {
            text: 'v3.2.8',
            link: '/version.md#v3-2-8',
          },
          {
            text: 'v3.2.7',
            link: '/version.md#v3-2-7',
          },
          {
            text: 'v3.2.6',
            link: '/version.md#v3-2-6',
          },
          {
            text: 'v3.2.5',
            link: '/version.md#v3-2-5',
          },
          {
            text: 'v3.2.3',
            link: '/version.md#v3-2-3',
          },
          {
            text: 'v3.1.1',
            link: '/version.md#v3-1-1',
          },
          {
            text: 'v3.0.8',
            link: '/version.md#v3-0-8',
          },
          {
            text: 'v3.0.5',
            link: '/version.md#v3-0-5',
          },
          {
            text: 'v3.0.4',
            link: '/version.md#v3-0-4',
          },
          {
            text: 'v3.0.0',
            link: '/version.md#v3-0-0',
          },
          {
            text: 'v2',
            link: 'https://wzs28150.github.io/coolui-scroller/v2/',
          },
          {
            text: 'v1',
            link: 'https://github.com/wzs28150/coolui-scroller/tree/1.0',
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': [],
      '/components/': [
        { text: 'Scroller 滚动组件', link: '/components/scroller.md' },
        { text: 'Item 列表项组件', link: '/components/item.md' },
        { text: 'Page 长列表分页组件', link: '/components/page.md' },
        { text: 'Empty 空列表组件', link: '/components/empty.md' },
        { text: 'Handtip 手势提示组件', link: '/components/handtip.md' },
        { text: 'Loadmore 加载更多组件', link: '/components/loadmore.md' },
        { text: 'Refresh 下拉刷新组件', link: '/components/refresh.md' },
        { text: 'Parallax 下拉视差组件', link: '/components/parallax.md' },
        { text: 'Nav 分类导航组件', link: '/components/nav.md' },
        { text: 'Nav Pannel 切换组件', link: '/components/navPannel.md' },
        { text: 'Search 搜索组件', link: '/components/search.md' },
        { text: 'Sort 排序及分类筛选组件', link: '/components/sort.md' },
        { text: 'Floor 下拉二楼组件', link: '/components/floor.md' },
        { text: 'BackToTop 回到顶部组件', link: '/components/backToTop.md' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzs28150/coolui-scroller' },
    ],
    outlineTitle: '快速跳转',
    outline: 2,
  },
})

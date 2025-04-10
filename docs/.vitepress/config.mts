import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

const vitePressOptions = {
  lang: "zh-CN",
  title: "TaricのBlog",
  titleTemplate: ":title - Custom Suffix",
  description: "Taric的博客",
  srcDir: "src",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: "/asset/svg/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "进阶",
        items: [{ text: "数据结构与算法", link: "/algorithm/" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
};

const vitePressSidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "src/frontend",
    resolvePath: "/frontend/",
    manualSortFileNameByPriority: ["html", "css", "javascript", "typescript"],
    collapsed: false,
    capitalizeFirst: true,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
  },
  {
    documentRootPath: "docs",
    scanStartPath: "src/engineering",
    resolvePath: "/engineering/",
    collapsed: false,
    capitalizeFirst: true,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
  },
  {
    documentRootPath: "docs/src",
    scanStartPath: "algorithm/",
    resolvePath: "/algorithm/",
    useTitleFromFileHeading: true,
    collapsed: false,
    collapseDepth: 3,
    rootGroupCollapsed: true,
  },
];
export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);

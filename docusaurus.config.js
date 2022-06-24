// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const packageInfo = require('./package.json');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Front Talk',
  tagline: 'talk about front end',
  url: 'https://ft.imzqg.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zqbright', // Usually your GitHub org/user name.
  projectName: 'home-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        gtag: {
          trackingID: 'G-MLKQGWHJEE',
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Front Talk',
        logo: {
          alt: 'Front Talk',
          src: 'img/logo.png',
        },
        items: [

          {
            label: 'Email',
            href: 'mailto:zqbright@gmail.com',
            position:'right'
          },
          {
            href: 'https://github.com/qbright',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          // {
          //   title: 'Contact',
          //   items: [
          //     {
          //       label: 'Email - zqbright@gmail.com',
          //       href: 'mailto:zqbright@gmail.com',
          //     },
          //     {
          //       label: 'WeChat - QBRIGHT',
          //       href:'about:blank'
          //     }
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'segmentfault',
          //       href: 'https://segmentfault.com/u/zqbright/articles',
          //     },
          //     {
          //       label: 'juejin',
          //       href: 'https://juejin.cn/user/4459274890385310',
          //     },
          //   ],
          // },
          // {
          //   title: 'Code',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/qbright',
          //     },
          //   ],
          // },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} zqbright, Inc. Built with Docusaurus. ${packageInfo.version}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

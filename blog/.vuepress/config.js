module.exports = {
  base: '/v-blog/',
  plugins: [
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '警告'
      }
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
  ],
  theme: '@vuepress/blog',
  title: 'Bac3Fi',
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'Resume',
        link: '/resume/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/PhiGKZ/',
        },
        {
          type: 'github',
          link: 'https://github.com/Bac3Phi',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/phi-pham-123a0619b/',
        },
        {
          type: 'phone',
          link: '/resume',
        },
      ],
      copyright: [
        {
          text: 'Made by FiFi with ❤️',
        },
      ],
  
    },
    smoothScroll: true,
  }
}
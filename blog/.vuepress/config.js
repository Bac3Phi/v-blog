module.exports = {
  base: '/v-blog/',
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
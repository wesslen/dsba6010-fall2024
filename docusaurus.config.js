const config = {
  title: 'DSBA 6010: Applications of LLMs',
  tagline: 'Special Topics in DSBA - Fall 2024',
  url: 'https://dsba6010-fall2024.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wesslen',
  projectName: 'dsba6010-fall2024',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wesslen/dsba6010-fall2024/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsed: true,
          routeBasePath: '/', // This makes docs the root
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/', // Serve docs at the site root
          // sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false, // Disable blog
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DSBA 6010',
      logo: {
        alt: 'UNCC DSBA Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'syllabus',
          position: 'left',
          label: 'Syllabus',
        },
        {
          type: 'doc',
          docId: 'classes/week1',
          position: 'left',
          label: 'Classes',
        },
        {
          type: 'doc',
          docId: 'case-studies/overview',
          position: 'left',
          label: 'Case Studies',
        },
        {
          type: 'doc',
          docId: 'project/overview',
          position: 'left',
          label: 'Project',
        },
        {
          type: 'doc',
          docId: 'video-responses/overview',
          position: 'left',
          label: 'Video Responses',
        },
        {
          href: 'https://canvas.uncc.edu/courses/225610',
          label: 'Canvas',
          position: 'right',
        },
        {
          href: 'https://github.com/wesslen/dsba6010-fall2024',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Course',
    //       items: [
    //         {
    //           label: 'Syllabus',
    //           to: '/docs/syllabus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Resources',
    //       items: [
    //         {
    //           label: 'Canvas',
    //           href: 'https://canvas.uncc.edu/courses/225610',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/wesslen/dsba6010-fall2024',
    //         },
    //         {
    //           label: 'UNCC DSBA',
    //           href: 'https://dsba.uncc.edu',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Ryan Wesslen. Built with Docusaurus.`,
    // },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['python', 'bash', 'json'],
    },
  },
};

module.exports = config;

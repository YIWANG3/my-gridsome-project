// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  host: "0.0.0.0",
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://47.103.62.246:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project', 'journal'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiJournal: [
      {
        path: '/journal/:slug',
        component: './src/templates/JournalPost.vue'
      }
    ],
    StrapiProject: [
      {
        path: '/project/:slug',
        component: './src/templates/ProjectPost.vue'
      }
    ]
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
}

// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Hello',

  siteUrl: 'https://davidh61.github.io',
  pathPrefix: '/david-harlow',

  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "post/**/*.md",
        typeName: "Post"
      }
    }
  ]
};

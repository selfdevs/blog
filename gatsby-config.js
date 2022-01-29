module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/self_devs`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [
    { resolve: `gatsby-theme-document`},
    {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["@weknow/gatsby-remark-twitter"]
    }
  }
]
};

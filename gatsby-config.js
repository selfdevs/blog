module.exports = {
  siteMetadata: {
    title: `blog by the self.dev community`,
    titleTemplate: "%s · selfdev blog",
    name: `Long Shong`,
    siteUrl: `https://blog.theselfdev.com`,
    description: `This is the selfdev community blog run by developers for developers and content creators.`,
    image: "./src/site-image-og.jpg",
    twitterUsername: "@self_devs",
    social: [
      {
        name: `github`,
        url: `https://github.com/selfdevs/blog`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/self_devs`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction"],
      ignoreIndex: true
    }
  },
  plugins: [
    { resolve: `gatsby-theme-document`},
    `gatsby-plugin-react-helmet`
]
};

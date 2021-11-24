module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Insightful Buzz`,
    author: `J Morrison`,
    description: `Join our next Live`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}

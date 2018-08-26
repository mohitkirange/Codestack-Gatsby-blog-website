module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'C:/Users/kiran/Desktop/Final projects/codestack-blog/src/pages',
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
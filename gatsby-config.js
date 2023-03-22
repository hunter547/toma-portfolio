module.exports = {
  siteMetadata: {
    description: "Student Doctor Portfolio for Toma Evanoff",
    locale: "en",
    showThemeLogo: false,
    title: "Toma Evanoff Portfolio",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("rocky-vista")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `content/images/icon.png`,
      },
    },
  ],
};

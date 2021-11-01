
// ------------------------------ CONFIG
const siteConfig = {
  siteUrl: "http://localhost:8000",
  pathPrefix : "/",
  title: "Gatsby starter",
  titleAlt: "Gatsby starter",
  description: "Gatsby starter",
  banner: "static/images/favicon.png",
  headline: "Gatsby starter",
  siteLanguage: "fr",
  ogLanguage: "fr_FR",
  author: "Eddy Naboulet",
  twitter: "@EddyNaboulet",
  facebook: "",
  background_color: '#FFFFFF',
  theme_color: '#155AC3'
}

// ------------------------------ EXPORT
module.exports = {
  siteMetadata: siteConfig,
  
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-glslify",
    // {
    //   resolve: `gatsby-plugin-typescript`,
    //   options: {
    //     isTSX: true,
    //     jsxPragma: `jsx`, 
    //     allExtensions: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import './src/styles/index.scss';`,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        display: "standalone",
        crossOrigin: `use-credentials`,
        name: siteConfig.title,
        short_name: siteConfig.titleAlt,
        description: siteConfig.description,
        background_color: siteConfig.background_color,
        theme_color: siteConfig.theme_color,
        icon: siteConfig.banner,
        icon_options: {
          purpose: `any maskable`,
        }
      },
    },


    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images/",
      },
      __key: "images",
    },
  ],
};

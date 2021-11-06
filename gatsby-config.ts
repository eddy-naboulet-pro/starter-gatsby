import { GatsbyConfig } from "gatsby"
import { site } from "./src/constants/meta"

require(`dotenv`).config()

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteTitle: site.title,
    siteTitleDefault: site.titleDefault,
    siteUrl: site.url,
    siteDescription: site.description,
    siteImage: site.image,
    twitter: site.twitter,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import './src/styles/index.scss';`,
      }
    },

    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/components/layout/Layout.tsx`),
          injectPageProps: false,
        }
    },

    // {
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     interval: 300,
    //     timeout: 30000,
    //     custom: [
    //       {
    //         name: `Crimson Pro`,
    //         file: `https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600..800&display=swap`,
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/",
        display: "standalone",
        crossOrigin: `use-credentials`,
        name: site.title,
        short_name: site.titleAlt,
        description: site.description,
        background_color: site.background_color,
        theme_color: site.theme_color,
        icon: site.image,
        cache_busting_mode: 'none',
        icon_options: {
          purpose: `any maskable`,
        }
      }
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //      workboxConfig: {
    //         globPatterns: ['**/icon-path*']
    //      }
    //   }
    // },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          page_template: require("./custom_types/page_template.json"),
          homepage: require("./custom_types/homepage.json"),
          site_meta_data: {},
        },
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}

export default gatsbyConfig
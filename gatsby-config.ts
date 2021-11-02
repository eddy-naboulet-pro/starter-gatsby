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
    `gatsby-plugin-image`,
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
          layout: require.resolve(`./src/components/layout/Layout.tsx`)
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
        icon_options: {
          purpose: `any maskable`,
        }
      }
    },
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       importWorkboxFrom: `cdn`,
    //     },
    //   },
    // },

    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   output: `/`,
      //   excludes: [
      //     `/dev-404-page`,
      //     `/404`,
      //     `/404.html`,
      //     `/offline-plugin-app-shell-fallback`,
      //     `/privacy-policy`,
      //     `/legal-notice`,
      //   ],
      //   query: `
      //   {
      //     posts: allPageTemplate(filter: { published: { eq: true } } ) {
      //       nodes {
      //         path: slug
      //         lastmod: lastUpdated
      //       }
      //     }
      //     other: allSitePage(filter: { pluginCreator: { name: { ne: "default-site-plugin" } } } ) {
      //       nodes {
      //         path
      //       }
      //     }
      //   }
      //   `,
      //   resolveSiteUrl: () => site.url,
      //   resolvePages: ({ posts, garden, other }) => [].concat(posts.nodes, other.nodes),
      //   serialize: ({ path, lastmod }) => ({
      //     url: path,
      //     lastmod,
      //   }),
      // },
    },

  ],
}

export default gatsbyConfig
import { GatsbyNode } from "gatsby"

type CreatePagesResult = {
  pages: {
    nodes: {
      uid: string
    }[]
  }
}

const pageTemplate = require.resolve(`./src/templates/page/Page.tsx`)

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<CreatePagesResult>(`
    {
      pages: allPrismicPageTemplate {
        nodes {
          uid
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading the createPages query results`, result.errors)
    return
  }


  result.data.pages.nodes.forEach((page) => {

    createPage({
      path: page.uid,
      component: pageTemplate,
      context: {
        uid: page.uid,
      },
    })
  })
}
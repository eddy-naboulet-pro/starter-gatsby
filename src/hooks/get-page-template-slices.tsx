import { graphql, useStaticQuery } from "gatsby"

import { IMultiplePageTemplateData } from '../data/dataStruct'

interface Props  {
  page_template: {
    edges: IMultiplePageTemplateData[]
  }
}

export const getPageTemplateSlices = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      page_template: allPrismicPageTemplate {
        edges {
          node {
            uid
            data {
              body {
                ... on PrismicPageTemplateDataBodyCube {
                  ...cubeData
                }
                ... on PrismicPageTemplateDataBodyCubes {
                  ...cubesData
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.page_template
}
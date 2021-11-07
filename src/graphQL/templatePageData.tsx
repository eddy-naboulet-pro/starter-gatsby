import { graphql } from "gatsby"



// ------------------------------ CUBE
export const cubeData = graphql`
  fragment cubeData on PrismicPageTemplateDataBodyCube {
    id
    slice_type
    primary {
      texture {
        alt
        url
      }
    }
  }
`
// ------------------------------ CUBES
export const cubesData = graphql`
  fragment cubesData on PrismicPageTemplateDataBodyCubes {
    id
    slice_type
    items {
      texture {
        alt
        url
      }
    }
  }
`
// ------------------------------ MAIN
export const pageTemplateData = graphql`
  fragment pageTemplateData on PrismicPageTemplate {
    uid
    data {
      meta_title
      meta_description
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
`

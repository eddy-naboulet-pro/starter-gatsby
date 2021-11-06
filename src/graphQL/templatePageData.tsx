import { graphql } from "gatsby"


// ------------------------------ MAIN
export const pageTemplateData = graphql`
  fragment pageTemplateData on PrismicPageTemplate {
    uid
    data {
      meta_title
      meta_description
    }
  }
`

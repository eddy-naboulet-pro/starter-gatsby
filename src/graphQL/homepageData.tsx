import { graphql } from "gatsby"


// ------------------------------ MAIN
export const homepageData = graphql`
  fragment homepageData on PrismicHomepage {
    uid
    data {
      meta_title
      meta_description
    }
  }
`

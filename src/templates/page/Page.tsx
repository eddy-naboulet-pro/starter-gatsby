import React from "react"
import { graphql, PageProps } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

import * as scss from "./Page.module.scss"
import { SEO } from '../../components/seo/Seo'
import Header from '../../components/header/Header'

import { IPageData } from "../../data/dataStruct"
import Scroll from "../../lib/scroll"

const Index: React.FC<PageProps<IPageData>> = ({ data }) => {
  const { page } = data
  const componentName = page.uid
  
  React.useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: black; color: red');
  }, [])

  return (
    <div className={scss.root}>
      <SEO title={page.data.meta_title} description={page.data.meta_description} />
      <h1>Homepage</h1>
      <TransitionLink
        to='/'
        exit={{
          trigger: ({ exit, node }) => {
            Scroll.disable()
          },
          length: 0.5

        }}
        entry={{
          trigger: ({ exit, node }) => {
            Scroll.reset()
          },
          delay: 0.7,

        }}
      >Homepage</TransitionLink>
      <Header/>
    </div>
  )
}

export default Index

// ------------------------------ QUERY
export const query = graphql`
query page($uid: String!) {
  page : prismicPageTemplate(uid: {eq: $uid}) {
    ...pageTemplateData
  }
}
`
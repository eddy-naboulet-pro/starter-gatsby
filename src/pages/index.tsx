import React from "react"
import { graphql, PageProps, Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

import * as scss from "./index.module.scss"
import { SEO } from '../components/seo/Seo'
import { ISinglePageTemplateData } from "../data/dataStruct"

import Scroll from "../lib/scroll"

const componentName = 'home'
const Index: React.FC<PageProps<ISinglePageTemplateData>> = ({ data }) => {
  const { page } = data

  React.useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: black; color: red');
  }, [])

  return (
    <div className={scss.root}>
      <SEO title={page.data.meta_title} description={page.data.meta_description} />
      <h1>Homepage</h1>
      <TransitionLink
        to='/projects'
        exit={{
          trigger: ({ exit, node }) => {
            Scroll.disable()
          },
          length: 0.05

        }}
        entry={{
          trigger: ({ exit, node }) => {
            Scroll.reset()
          },
          delay: 0.1,
        }}
      >projects</TransitionLink>
            <TransitionLink
        to='/about'
        exit={{
          trigger: ({ exit, node }) => {
            Scroll.disable()
          },
          length: 0.05

        }}
        entry={{
          trigger: ({ exit, node }) => {
            Scroll.reset()
          },
          delay: 0.1,
        }}
      >about</TransitionLink>
    </div>
  )
}

export default Index

// ------------------------------ QUERY
export const query = graphql`
  {
    page: prismicHomepage {
      ...homepageData
    }
  }
`
import React, { useEffect, useContext } from "react"
import { graphql, Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../components/GlobalContextProvider/GlobalContextProvider"

import { SEO } from '../components/seo/Seo'

const Page = ( { data } ) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {
  }, [])

  return (
    <div className="content">
      <SEO
        title="Digital Garden"
        description="I understand my Digital Garden as a collection of free form, interconnected & evolving ideas that grow over time. Like plants grow in a real-world garden."
      />
                        <TransitionLink
                  to={'/projects'}
                  exit={{
                    trigger: ({ exit, node }) => {
                      console.log(node)
                    },
                    length: 0.5
                  }}
                  entry={{
                    trigger: ({ exit, node }) => {
                      console.log(node)
                    },
                    delay: 0.7,
                  }}
                >{state.theme}
                </TransitionLink>
    </div>
  )
}

export default Page
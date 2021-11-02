import React, { useEffect, useContext } from "react"
import { graphql, Link } from "gatsby"

import { merge } from "../lib/arrayUtils"

import * as scss from './projects.module.scss'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../components/GlobalContextProvider/GlobalContextProvider"

import { SEO } from '../components/seo/Seo'

const Projects = ( { data } ) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  useEffect(() => {
  }, [])

  return (
    <div>
      <SEO title="home test lol" description="putain"/>
      <Link to='/'>{state.theme}</Link>
      <h1 className={merge([scss.test, scss.test2])}>Hello World</h1>
    </div>
  )
}

export default Projects
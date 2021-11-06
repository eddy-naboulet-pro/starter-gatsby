import React from "react"
import GlobalContextProvider from "./src/components/GlobalContextProvider/GlobalContextProvider"

import './src/styles/base/reset.scss'
import './src/styles/base/base.scss'

import RAF from './src/lib/raf'

RAF.init()

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
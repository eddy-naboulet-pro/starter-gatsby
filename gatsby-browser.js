import React from "react"
import GlobalContextProvider from "./src/components/GlobalContextProvider/GlobalContextProvider"

export const registerServiceWorker = () => true

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
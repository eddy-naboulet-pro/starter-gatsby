import React, { useState, useRef, useEffect, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  LoadingManager
} from 'three'



// ------------------------------ DEFAULT CONTEXT VALUE
const defaultContextValue = {
  data: {
    fonts:[],
    canvas: null,
    scroll: null,
  },
  set: () => {},
}

const { Provider, Consumer } = createContext(defaultContextValue)

const ContextProviderComponent = (data) => {

  const [show, setShow] = useState(false)

  const refContainer = useRef()

  useEffect(() => {
    console.log('%c USE EFFECT FROM CONTEXT' ,'background: white; color: black')

    const loadingManager = new LoadingManager(
      () => {
        setShow(true)
      },  
      (itemUrl, itemsLoaded, itemsTotal) => {
        console.log(`${itemsLoaded} on ${itemsTotal}`)
      }
    )


    const handleResize = () => {}

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Provider value={defaultContextValue}>
      { show ? data.children : null }
      <div id='container' ref={refContainer}></div>
    </Provider>
  )

}

export { Consumer as default, ContextProviderComponent, defaultContextValue }

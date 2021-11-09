import React, { useEffect, useContext, useRef} from "react"
import GSAP from 'gsap'
import {
  LoadingManager,
  TextureLoader
} from "three"
import *  as scss from './Preloader.module.scss'
import { getPageTemplateWebglSlice } from "../../lib/arrayUtils"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../globalContextProvider/GlobalContextProvider"
import { getPagesTemplate } from "../../hooks/getPagesTemplate"
import texturePlaceholder from '../../../static/textures/texture-placeholder.jpg'
import gradient from '../../../static/textures/gradient-01.jpg'

const componentName = 'Preloader'

const Preloader = () => {

  // ------------------------------------------------ QUERIES
  const pagesTemplateData = getPagesTemplate()

  // ------------------------------------------------ REFS
  const refPreloader = useRef<HTMLDivElement>()

  // ------------------------------------------------ CONTEXT
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: black; color: red')

    const loadingManager = new LoadingManager(
      () => {
        console.log('loaded')
        dispatch({ type: "TOGGLE_WEBGL" })
        GSAP.to(refPreloader.current, {
          autoAlpha: 0,
          pointerEvents: 'none'
        })
      },  
      (itemUrl, itemsLoaded, itemsTotal) => {
        console.log(`${itemsLoaded} on ${itemsTotal}`)
      }
    )
    
    const textureLoader = new TextureLoader(loadingManager)
    const textures = []
    textures.push(textureLoader.load(texturePlaceholder))
    textures.push(textureLoader.load(gradient))

    dispatch({ type: "PUSH_TEXTURES", textures })
    dispatch({ 
      type: "PUSH_PAGES_TEMPLATE",
      pagesTemplate : getPageTemplateWebglSlice(pagesTemplateData.edges, textureLoader)
    })

  }, [])
  
  return (
    <div className={scss.root} ref={refPreloader}></div>
  )
}

export default Preloader
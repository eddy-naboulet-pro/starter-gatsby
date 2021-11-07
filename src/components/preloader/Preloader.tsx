import React, { useEffect, useContext, useRef} from "react"
import { useStaticQuery, graphql } from "gatsby"

import GSAP from 'gsap'
import {
  LoadingManager,
  TextureLoader
} from "three"

import *  as scss from './Preloader.module.scss'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../GlobalContextProvider/GlobalContextProvider"
import { getPageTemplateSlices } from "../../hooks/get-page-template-slices"

import texturePlaceholder from '../../../static/textures/texture-placeholder.jpg'
import gradient from '../../../static/textures/gradient-01.jpg'

const componentName = 'Preloader'

const Preloader = () => {

  // ------------------------------------------------ QUERIES
  const pagesTemplateData = getPageTemplateSlices()

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

    const pagesTemplate = []
    pagesTemplateData.edges.forEach(({node}, index) => {
      pagesTemplate[index] = {
        uid: node.uid,
        slices: node.data.body.map((item) => {
          return {
            id: item.id,
            slice_type: item.slice_type,
            webgl : null,
            texture: item.primary && item.primary.texture ? textureLoader.load(item.primary.texture.url) : undefined,
            items : item.items ? item.items.map((item) => {
              return {
                texture : textureLoader.load(item.texture.url)
              }
            }) : undefined
          }
        })
      }
    })
    dispatch({ type: "PUSH_PAGES_TEMPLATE", pagesTemplate })

  }, [])
  
  return (
    <div className={scss.root} ref={refPreloader}></div>
  )
}

export default Preloader
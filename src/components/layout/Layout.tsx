import React, { Fragment, useEffect, useRef, useContext } from 'react'

import { SkipNavLink } from '../skipNav/SkipNav'
import { SEO } from '../seo/Seo'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../GlobalContextProvider/GlobalContextProvider"

import Scroll from '../../lib/scroll'
import Canvas from '../../lib/canvas'
import Resize from '../../lib/eventsResize'

const componentName = 'Layout'

const Layout = ({children, location, pageContext}) => {
  
  // ------------------------------------------------ CONTEXT
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  // ------------------------------------------------ REFS
  const refContainer = useRef()

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: red; color: black')

    Scroll.init()
    Canvas.init(refContainer.current)
    Resize.init()
    dispatch({ type: "TOGGLE_WEBGL" })
  }, [])

  // ------------------------------------------------ RENDER
  return (
    <Fragment>
      <SkipNavLink/>
      <SEO/>
      <section id='reach-skip-nav' className='layout'>
        <div asscroll-container='true'>
          <div className='scroll-wrap'>
            {children}
          </div>
        </div>
      </section>
      <div id='container' ref={refContainer}></div>
    </Fragment>
  )
}

export default Layout

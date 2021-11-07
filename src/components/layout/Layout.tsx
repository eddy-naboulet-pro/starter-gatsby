import React, { Fragment, useEffect, useRef, useContext } from 'react'

import { SkipNavLink } from '../skipNav/SkipNav'
import { SEO } from '../seo/Seo'

import Preloader from '../preloader/Preloader'

import Scroll from '../../lib/scroll'
import Canvas from '../../lib/canvas'
import Resize from '../../lib/eventsResize'

const componentName = 'Layout'

const Layout = ({children, location, pageContext}) => {

  // ------------------------------------------------ REFS
  const refContainer = useRef()

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: red; color: black')

    Scroll.init()
    Canvas.init(refContainer.current)
    Resize.init()
  }, [])

  // ------------------------------------------------ RENDER
  return (
    <Fragment>
      <SkipNavLink/>
      <SEO/>
      <Preloader/>
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

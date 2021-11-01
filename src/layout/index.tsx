import * as React from 'react'

import { SkipNavLink } from './SkipNav'
import { SEO } from './seo'

import { ContextProviderComponent } from './Context'


import './styles.scss'
import '../graphQL'

const Layout = ({children, location, pageContext}) => {

  return (
    <ContextProviderComponent>
      <SkipNavLink/>
      <SEO/>
      <section id='reach-skip-nav' className='layout'>
        { children }
      </section>
    </ContextProviderComponent>
  )
}

export default Layout

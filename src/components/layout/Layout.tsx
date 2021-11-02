import React, { Fragment, useContext } from 'react'

import { SkipNavLink } from '../skipNav/SkipNav'
import { SEO } from '../seo/Seo'


const Layout = ({children, location, pageContext}) => {

  return (
    <Fragment>
      <SkipNavLink/>
      <SEO/>
      <section id='reach-skip-nav' className='layout'>
        {children}
      </section>
    </Fragment>
  )
}

export default Layout

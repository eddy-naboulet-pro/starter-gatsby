import React from "react"
import * as scss from "./index.module.scss"
import { SEO } from '../components/seo/Seo'

const NotFoundPage = () => {
  return (
    <div className={scss.root}>
      <SEO />
    </div>
  )
}

export default NotFoundPage
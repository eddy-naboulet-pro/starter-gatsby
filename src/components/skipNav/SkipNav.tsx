import * as React from "react"
import *  as scss from './SkipNav.module.scss'

const defaultId = `skip-to-content`
const SkipNavLink: React.FC<{ contentId?: string }> = ({ children = `Skip to content`, contentId, ...props }) => {
  const id = contentId || defaultId

  return (
    <a
      className={scss.root}
      {...props}
      href={`#${id}`}
      data-skip-to-content
    >
      {children}
    </a>
  )
}

/**
 * Wrap the main content of a page with this, thus also the <main> tag
 */
const SkipNavContent: React.FC<{ id?: string }> = ({ children, id: idProp, ...props }) => {
  const id = idProp || defaultId

  return (
    <main {...props} id={id}>
      {children}
    </main>
  )
}

export { SkipNavLink, SkipNavContent }
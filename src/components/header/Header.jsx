import React, { useEffect, useContext} from "react"
import *  as scss from './Header.module.scss'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../GlobalContextProvider/GlobalContextProvider"

import Cube from "../../componentsWebgl/cube/cube"

const componentName = 'Header'

const Header = () => {
  // ------------------------------------------------ CONTEXT
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  // ------------------------------------------------ USEEFFECT WEBGL
  useEffect(() => {
    if (state.webgl) {
      Cube.init()
    }
  }, [state.webgl])

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: black; color: red');

    return () => {
      Cube.destroy()
    }
  }, [])
  
  return (
    <div className={scss.root}></div>
  )
}

export default Header
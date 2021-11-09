import React, { useEffect, useContext, useRef } from "react"
import *  as scss from './Cube.module.scss'
import { IBasePageTemplateData, ICube } from '../../data/dataStruct'
import {
  GlobalStateContext,
} from "../globalContextProvider/GlobalContextProvider"
import CubeWebgl from "../../componentsWebgl/cube/cube"

const componentName = 'Cube'

interface Iprops {
  uid: string
  data: ICube
}

const Cube = ({data, uid}  : Iprops) => {
  // ------------------------------------------------ CONTEXT
  const globalState = useContext(GlobalStateContext)

  // ------------------------------------------------ REFS
  const refCube = useRef<HTMLElement>()
  
  // ------------------------------------------------ FIND & HANDLE COMPONENTS WEBGL
  const handleWebgl = (destroy: boolean) => {
    const slice = globalState.pages_template[uid]?.slices[data.id]
    if (slice && destroy) {
      slice.webgl.destroy()
    } else if (slice)   {
      const cubeObject = new CubeWebgl(slice.texture, refCube.current)
      slice.webgl = cubeObject
    }
  }

  // ------------------------------------------------ USEEFFECT WEBGL
  useEffect(() => {
    globalState.webgl && handleWebgl(false)
    return () => {
      handleWebgl(true)
    }
  }, [globalState.webgl])

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: green; color: red')
  }, [])
  
  return (
    <div className={scss.root} >
      <span className={scss.cube} ref={refCube}></span>
    </div>
  )
}

export default Cube
import React, { useEffect, useContext} from "react"
import *  as scss from './Header.module.scss'


const componentName = 'Header'

const Header = () => {

  // ------------------------------------------------ USEEFFECT ONCE
  useEffect(() => {
    console.log(`%c USEEFFECT FROM ${componentName}`, 'background: black; color: red');
  }, [])
  
  return (
    <div className={scss.root}></div>
  )
}

export default Header
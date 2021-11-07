import React, { createContext, useReducer } from "react"

const initialState = {
  theme: "light",
  currentPage: null,
  webgl: false,
  textures: [],
  pages_template: []
}

export const GlobalStateContext = createContext(null)
export const GlobalDispatchContext = createContext(null)


function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.uid,
      }
    }
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
    }
    case "TOGGLE_WEBGL": {
      return {
        ...state,
        webgl: true,
      }
    }
    case "PUSH_TEXTURES": {
      return {
        ...state,
        textures: action.textures
      }
    }
    case "PUSH_PAGES_TEMPLATE": {
      return {
        ...state,
        pages_template: action.pagesTemplate
      }
    }
    case "SET_THEME": {
      return {
        ...state.theme
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        { children }
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
import React, { createContext, useReducer } from "react"

const initialState = {
  theme: "light",
  webgl: false
}

export const GlobalStateContext = createContext(null)
export const GlobalDispatchContext = createContext(null)


function reducer(state, action) {
  switch (action.type) {
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
const React = require("react")

const GlobalContextProvider = require("./src/components/GlobalContextProvider/GlobalContextProvider")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
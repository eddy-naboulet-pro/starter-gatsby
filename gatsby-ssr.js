const React = require("react")

const GlobalContextProvider = require("./src/components/globalContextProvider/GlobalContextProvider")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
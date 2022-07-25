import React, { useContext } from 'react'

const ColorModeContext = React.createContext({ mode: 'light', update: null })
const ColorModeProvider = ColorModeContext.Provider

const useColorMode = () => useContext(ColorModeContext);

const ColoredApp = ({ children }) => {
  const [colorMode, setColorMode] = React.useState({ mode: 'light' })
  const changeColor = (mode) => setColorMode({ ...colorMode, mode: mode })
  return (
    <ColorModeProvider value={{ colorMode, update: changeColor }}>
      {children}
    </ColorModeProvider>
  )
}

export { ColoredApp, useColorMode }
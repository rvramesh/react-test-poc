import React, { useContext } from 'react'

const ColorModeContext = React.createContext('light')
const ColorModeProvider = ColorModeContext.Provider

const useColorMode = () => useContext(ColorModeContext);

const ColoredApp = ({children}) => {
    const [colorMode, setColorMode] = React.useState('light')

  return (
    <ColorModeProvider value={{ colorMode, update: setColorMode }}>
      {children}
    </ColorModeProvider>
  )
}

export { ColoredApp, useColorMode}
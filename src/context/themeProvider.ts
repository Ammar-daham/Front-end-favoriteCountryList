import React from 'react'

interface IThemeContext {
  theme: string
  setTheme: any
}

export default React.createContext({} as IThemeContext)

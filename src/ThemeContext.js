import React, { createContext, useState } from 'react'

export const ThemeContext = createContext('dark')


export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('dark')

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (
      prevTheme === 'light' ?  'dark' : 'light'
    ))
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      onToggleTheme: handleToggleTheme
    }}>{props.children}</ThemeContext.Provider>
  )
}

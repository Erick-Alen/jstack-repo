import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';


function App() {
  const [theme, setTheme] = useState('dark')

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return;
    }
    console.log('rendered')
  }, [theme])

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      {/* {theme === 'dark' && <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />} */}
    </ThemeProvider>
  );
};

export default App;

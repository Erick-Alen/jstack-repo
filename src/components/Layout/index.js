import React, {useEffect} from 'react';

import Header from '../Header';
import Routes from '../../Routes';
import Footer from '../Footer';
import { useTheme } from 'styled-components';

export default function Layout({ onToggleTheme, selectedTheme }) {
  // const theme = useTheme()
  // useEffect(() => {
  //   return () => {
  //     console.log('layout off the screen')
  //   }
  // }, [selectedTheme])
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme = {selectedTheme}/>
      <Routes />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      {/* <div style={{
        backgroundColor: theme.navBackgroundColor,
      }}>teste123</div> */}
    </>
  );
}

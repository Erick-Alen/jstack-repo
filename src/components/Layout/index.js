import React from 'react';
import * as S from './styles.js'

import Header from '../Header';
import Routes from '../../Routes';
import Footer from '../Footer';
// import { useTheme } from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Layout({ onToggleTheme, selectedTheme }) {
  // const theme = useTheme()
  // useEffect(() => {
  //   return () => {
  //     console.log('layout off the screen')
  //   }
  // }, [selectedTheme])
  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <S.Nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/:id'>Post</Link>
      </S.Nav>
      <Routes />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      {/* <div style={{
        backgroundColor: theme.navBackgroundColor,
      }}>teste123</div> */}
    </BrowserRouter>
  );
}

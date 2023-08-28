import React, {useEffect} from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { useTheme } from 'styled-components';

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme()
  // useEffect(() => {
  //   return () => {
  //     console.log('layout off the screen')
  //   }
  // }, [selectedTheme])
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme = {selectedTheme}/>
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <div style={{
        backgroundColor: theme.navBackgroundColor,
      }}>teste123</div>
    </>
  );
}

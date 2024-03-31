import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">{selectedTheme === 'dark' ? '🌞' : '🌚' }</button>
    </Container>
  );
}

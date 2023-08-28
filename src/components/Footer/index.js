import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h4>JStack's Blog. Todos os direitos reservados.</h4>
      <button onClick={onToggleTheme} type="button">{selectedTheme === 'dark' ? '🌞' : '🌚' }</button>
    </Container>
  );
}

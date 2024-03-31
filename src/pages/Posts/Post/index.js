import React, { useMemo } from 'react';
import {useParams, useLocation} from 'react-router-dom'
import { Container } from './styles';


export default function Post({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}

import React, { useMemo } from 'react';
import {useParams, useLocation} from 'react-router-dom'
import { Container } from './styles';

export default function Post() {
  // const params = useParams()
  // const location = useLocation()
  // const queryParams = useMemo(()=> new URLSearchParams(search), [search])
  return (
    <Container>
      <h2> Post Page</h2>
      {/* <h2>{title}</h2>
      <small>{description}</small> */}
    </Container>
  );
}


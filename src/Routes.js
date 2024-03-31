import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

// exact -> só renderiza os componentes da tela em questão se o endereço for exatamente igual
// ao colocado no endereço do site. Caso contrário, o component5e é colocado se o path
// começar com o endereço exposto na prop
export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location,{
    from: {opacity: 0, transform: 'translateY(50px)', position: 'absolute'},
    enter: {opacity: 1, transform: 'translateY(0)', position: 'absolute'},
    leave: {opacity: 0, transform: 'translateY(50px)', position: 'absolute'},
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route component={NotFound}/>
      </Switch>
    </animated.div>
  ));
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/LandingPage'
import Pagamentos from './components/Pagamentos'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/pagamentos" component={Pagamentos} />
    </Switch>
  );
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/item/:id" component={Detail} />
      <Route path="/exclusivos" component={Dashboard} />
      <Route path="/promocao" component={Dashboard} />
      <Route path="/favoritos" component={Dashboard} />
    </Switch>
  );
}

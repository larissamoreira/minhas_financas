import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login'
import CreateUser from '../pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={CreateUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
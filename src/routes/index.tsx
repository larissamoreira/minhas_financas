import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/createUser" component={CreateUser} />
      </Switch>
    </Router>
  );
};

export default Routes;

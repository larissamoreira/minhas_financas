import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateUser from '../pages/CreateUser';
import CreateEntry from '../pages/CreateEntry';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/createEntry" component={CreateEntry} />
      </Switch>
    </Router>
  );
};

export default Routes;

// import { IncomingMessage } from 'http';
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import DashboardClient from '../Pages/DashboardClient';
import DashboardSuperAdmin from '../Pages/DashboardSuperAdmin';
import DashboardAdmin from '../Pages/DashboardAdmin';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchClients from '../Pages/SearchClients';
import Profile from '../Pages/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact isPrivate path="/dashboard" component={DashboardClient} authLevel={1} />
    <Route exact isPrivate path="/dashboardAdmin" component={DashboardAdmin} authLevel={2} />
    <Route exact isPrivate path="/dashboardSuperAdmin" component={DashboardSuperAdmin} authLevel={3} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/search" component={SearchClients} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
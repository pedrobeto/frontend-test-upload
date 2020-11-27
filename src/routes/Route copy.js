import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthContext from '../context/auth';

// Importing pages
import DashboardClient from '../Pages/DashboardClient';
import DashboardSuperAdmin from '../Pages/DashboardSuperAdmin';
import DashboardAdmin from '../Pages/DashboardAdmin';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchClients from '../Pages/SearchClients';
import Profile from '../Pages/Profile';

function CustomRoute({ isPrivate, authLevel, ...rest }) {
  const { loading, signed } = useContext(AuthContext);

  if (loading) {
    return <h1>Carregando página...</h1>;
  }

  if (isPrivate && !signed) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact isPrivate path="/dashboard" component={DashboardClient} authLevel={1} />
      <CustomRoute exact isPrivate path="/dashboardAdmin" component={DashboardAdmin} authLevel={2} />
      <CustomRoute exact isPrivate path="/dashboardSuperAdmin" component={DashboardSuperAdmin} authLevel={3} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute exact path="/search" component={SearchClients} />
      <CustomRoute exact path="/profile" component={Profile} />
    </Switch>
  );
}
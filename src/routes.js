import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthContext from './context/auth';

import DashboardAdmin from './Pages/DashboardAdmin';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SearchClients from './Pages/SearchClients';
import Profile from './Pages/Profile';

function CustomRoute({ isPrivate, ...rest }) {
  const { user } = useContext(AuthContext);

  if (isPrivate && !user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/dashboard" component={DashboardAdmin}/>
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute isPrivate exact path="/search" component={SearchClients} />
      <CustomRoute isPrivate exact path="/profile/:userId" component={Profile} />
    </Switch>
  );
}
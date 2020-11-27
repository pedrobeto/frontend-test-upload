import React, {useContext} from 'react';
import {
  Router as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import AuthContext from '../context/auth';

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
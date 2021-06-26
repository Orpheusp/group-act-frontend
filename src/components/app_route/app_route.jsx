import React from 'react';

import { useAuth } from '../../services/auth_service/auth_service';
import { Route, Redirect } from 'react-router-dom';

export function AppRoute({ children, ...rest }) {
  const auth = useAuth();

  const render = ({ location }) => {
    switch (location.pathname) {
      // When destination is the user or the group front page.
      case '/user':
      case '/group':
        if (auth.user) {
          return children;
        } else {
          return redirectTo(location.pathname, '/');
        }
      // When destination is the welcome page.
      case '/':
        if (auth.user) {
          return redirectTo(location.pathname, '/user');
        } else {
          return children;
        }
      default:
        return redirectTo(location.pathname, '/');
    }
  };

  return <Route {...rest} render={render} />;
}

function redirectTo(from, to) {
  const dest = {
    pathname: to,
    state: { from },
  };
  return <Redirect to={dest} />;
}

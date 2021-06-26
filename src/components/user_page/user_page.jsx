import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/auth_service/auth_service';

export function UserPage() {
  const auth = useAuth();
  const history = useHistory();

  const logOut = () => {
    auth.signOut(() => {
      history.replace('/');
      console.log('logged out.');
    });
  };
  return (
    <div>
      <div>User Front Page</div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

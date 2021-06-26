import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/auth_service/auth_service';

export function WelcomePage() {
  const auth = useAuth();
  const history = useHistory();

  const logIn = () => {
    auth.signIn('phoneNumber', 'otp', (user) => {
      history.replace('/user');
      console.log('logged in.');
    });
  };
  return (
    <div>
      <div>Welcome, please log in</div>
      <button onClick={logIn}>Log In</button>
    </div>
  );
}

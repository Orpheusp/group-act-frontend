import React, { useContext, createContext, useState } from 'react';

import {
  sendGetOtpRequest,
  sendSignInRequest,
  sendSignUpRequest,
  sendSignOutRequest,
} from './auth_request_actions';

// TODO: Productionize Auth.

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export function MockAuthProvider({ children, mockUser = null }) {
  const mockAuth = {
    user: mockUser,
    getOtp: () => {
      console.log('getOtp called.');
    },
    signIn: () => {
      console.log('signIn called.');
    },
    signUp: () => {
      console.log('signUp called.');
    },
    signOut: () => {
      console.log('signOut called.');
    },
  };
  return (
    <authContext.Provider value={mockAuth}>{children}</authContext.Provider>
  );
}

function useAuthProvider() {
  // If the server found cookie containing logged in user credential, it will
  // write a user profile object to `window`, through which the front-end can
  // access and log the user in automatically.
  const [user, setUser] = useState(window['PROFILE'] || null);

  const getOtp = async (phoneNumber) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      await sendGetOtpRequest(phoneNumber);
    }
  };

  const signIn = async (phoneNumber, otp) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      const user = await sendSignInRequest(phoneNumber, otp);
      setUser(user);
    }
  };

  const signUp = async (phoneNumber, otp) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      const user = await sendSignUpRequest(phoneNumber, otp);
      setUser(user);
    }
  };

  const signOut = async (callback) => {
    if (user) {
      await sendSignOutRequest();
      setUser(null);
    } else {
      console.log('Already signed out.');
    }
  };

  return {
    user,
    getOtp,
    signIn,
    signUp,
    signOut,
  };
}

import React, { useContext, createContext, useState } from 'react';

import {
  sendGetOtpRequest,
  sendSignInRequest,
  sendSignUpRequest,
  sendSignOutRequest,
} from './AuthRequestActions';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export function MockAuthProvider({ children, mockUser = null }) {
  const mockAuthContext = {
    user: mockUser,
    getOtp: (phoneNumber) => {
      console.log(`getOtp(${phoneNumber}) called.`);
    },
    signIn: (phoneNumber, otp) => {
      console.log(`signIn(${phoneNumber}, ${otp}) called.`);
    },
    signUp: (phoneNumber, otp) => {
      console.log(`signUp(${phoneNumber}, ${otp}) called.`);
    },
    signOut: () => {
      console.log('signOut() called.');
    },
  };
  return (
    <authContext.Provider value={mockAuthContext}>
      {children}
    </authContext.Provider>
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
      const accountExists = await sendGetOtpRequest(phoneNumber);
      return accountExists;
    }
  };

  const signIn = async (phoneNumber, otp) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      const newUser = await sendSignInRequest(phoneNumber, otp);
      setUser(newUser);
    }
  };

  const signUp = async (phoneNumber, otp) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      const newUser = await sendSignUpRequest(phoneNumber, otp);
      setUser(newUser);
    }
  };

  const signOut = async () => {
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

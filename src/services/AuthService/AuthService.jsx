import React, { useContext, createContext, useState } from 'react';

import {
  sendGetOtpRequest,
  sendSignInRequest,
  sendSignUpRequest,
  sendSignOutRequest,
  sendUserPreferencesUpdateRequest,
} from './AuthRequestActions';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
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

  const updatePreferences = async (preferences) => {
    if (user) {
      const userId = user._id.$oid;
      await sendUserPreferencesUpdateRequest(userId, preferences);
    } else {
      console.log('Not logged in.');
    }
  };

  return {
    user,
    getOtp,
    signIn,
    signUp,
    signOut,
    updatePreferences,
  };
}

export function MockAuthProvider({ children, user = mockUser }) {
  const mockAuthContext = {
    user,
    getOtp: (phoneNumber) => {
      console.log(`getOtp(${phoneNumber}) called.`);

      // account exists
      return true;
    },
    signIn: (phoneNumber, otp) => {
      console.log(`signIn(${phoneNumber}, ${otp}) called.`);

      return mockUser;
    },
    signUp: (phoneNumber, otp) => {
      console.log(`signUp(${phoneNumber}, ${otp}) called.`);

      return mockUser;
    },
    signOut: () => {
      console.log('signOut() called.');
    },
    updatePreferences: (preferences) => {
      console.log(`updatePreferences(${preferences}) called.`);
    },
  };
  return (
    <authContext.Provider value={mockAuthContext}>
      {children}
    </authContext.Provider>
  );
}

const mockUser = {
  _id: { $oid: '60c82ee919a4e440b95a7a1f' },
  displayName: 'test user',
  phoneNumber: '+16145865715',
  preferences: [1, 5, 16, 8, 9, 7, 22, 13, 17, 19, 14],
};

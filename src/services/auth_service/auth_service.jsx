import React, { useContext, createContext, useState } from 'react';

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
  const [user, setUser] = useState(null);

  const signIn = (phoneNumber, otp, callback) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      sendSignInRequest(phoneNumber, otp).then((user) => {
        setUser(user);
        if (callback) {
          setTimeout(() => {
            callback(user);
          }, 100);
        }
      });
    }
  };

  const signUp = (phoneNumber, otp, callback) => {
    if (user) {
      console.log('Already signed in.');
    } else {
      sendSignUpRequest(phoneNumber, otp).then((user) => {
        setUser(user);
        if (callback) {
          setTimeout(() => {
            callback(user);
          }, 100);
        }
      });
    }
  };

  const signOut = (callback) => {
    if (user) {
      sendSignOutRequest().then(() => {
        setUser(null);
        if (callback) {
          setTimeout(callback(user), 100);
        }
      });
    } else {
      console.log('Already signed out.');
    }
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
}

function sendSignInRequest(phoneNumber, otp) {
  return Promise.resolve('user');
}

function sendSignUpRequest(phoneNumber, otp) {
  return Promise.resolve('user');
}

function sendSignOutRequest() {
  return Promise.resolve();
}

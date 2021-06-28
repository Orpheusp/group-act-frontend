import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from '../services/AuthService/AuthService';
import { GroupProvider } from '../services/GroupService/GroupService';
import { UserPage } from '../components/UserPage/UserPage';
import { GroupPage } from '../components/GroupPage/GroupPage';
import { WelcomePage } from '../components/WelcomePage/WelcomePage';
import { AppRoute } from '../components/AppRoute/AppRoute';

import './App.css';

export function App() {
  return (
    <GroupProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Switch>
              <AppRoute exact path="/">
                <WelcomePage />
              </AppRoute>
              <AppRoute path="/user">
                <UserPage />
              </AppRoute>
              <AppRoute path="/group">
                <GroupPage />
              </AppRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </GroupProvider>
  );
}

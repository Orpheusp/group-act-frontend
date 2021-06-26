import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from '../services/auth_service/auth_service';
import { UserPage } from '../components/user_page/user_page';
import { GroupPage } from '../components/group_page/group_page';
import { WelcomePage } from '../components/welcome_page/welcome_page';
import { AppRoute } from '../components/app_route/app_route';

import './App.css';

export function App() {
  return (
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
  );
}

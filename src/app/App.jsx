import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from '../services/auth_service/auth_service';
import { GroupProvider } from '../services/group_service/group_service';
import { UserPage } from '../components/user_page/user_page';
import { GroupPage } from '../components/group_page/group_page';
import { WelcomePage } from '../components/welcome_page/welcome_page';
import { AppRoute } from '../components/app_route/app_route';

import './App.css';

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

export default App;

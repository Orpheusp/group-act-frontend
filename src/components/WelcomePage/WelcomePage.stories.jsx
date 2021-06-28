import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { WelcomePage } from './WelcomePage';
import { MockAuthProvider } from '../../services/AuthService/AuthService';
import { MockGroupProvider } from '../../services/GroupService/GroupService';

export default {
  title: 'WelcomePage',
  component: WelcomePage,
  decorators: [
    (Story) => (
      <MockGroupProvider mockGroup={'group'}>
        <MockAuthProvider mockUser={'user'}>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </MockAuthProvider>
      </MockGroupProvider>
    ),
  ],
};

export const welcomePage = () => {
  return <WelcomePage />;
};

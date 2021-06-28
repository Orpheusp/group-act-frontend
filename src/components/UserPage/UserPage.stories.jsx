import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UserPage } from './UserPage';
import { MockAuthProvider } from '../../services/AuthService/AuthService';
import { MockGroupProvider } from '../../services/GroupService/GroupService';

export default {
  title: 'UserPage',
  component: UserPage,
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

export const userPage = () => {
  return <UserPage />;
};

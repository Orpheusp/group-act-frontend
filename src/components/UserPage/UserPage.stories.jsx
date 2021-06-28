import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UserPage } from './user_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';
import { MockGroupProvider } from '../../services/group_service/group_service';

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

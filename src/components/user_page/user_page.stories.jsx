import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UserPage } from './user_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';

export default {
  title: 'UserPage',
  component: UserPage,
  decorators: [
    (Story) => (
      <MockAuthProvider mockUser={'user'}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </MockAuthProvider>
    ),
  ],
};

export const userPage = () => {
  return <UserPage />;
};

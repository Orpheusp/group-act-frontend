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
      <MockGroupProvider>
        <MockAuthProvider>
          <MemoryRouter>
            <div className={'story-container'}>
              <Story />
            </div>
          </MemoryRouter>
        </MockAuthProvider>
      </MockGroupProvider>
    ),
  ],
};

export const userPage = () => {
  return <UserPage />;
};

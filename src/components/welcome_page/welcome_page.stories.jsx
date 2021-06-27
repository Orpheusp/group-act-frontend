import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { WelcomePage } from './welcome_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';
import { MockGroupProvider } from '../../services/group_service/group_service';

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

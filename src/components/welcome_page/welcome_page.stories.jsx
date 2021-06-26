import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { WelcomePage } from './welcome_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';

export default {
  title: 'WelcomePage',
  component: WelcomePage,
  decorators: [
    (Story) => (
      <MockAuthProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </MockAuthProvider>
    ),
  ],
};

export const welcomePage = () => {
  return <WelcomePage />;
};

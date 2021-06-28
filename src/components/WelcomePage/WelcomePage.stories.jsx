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

export const welcomePage = () => {
  return <WelcomePage />;
};

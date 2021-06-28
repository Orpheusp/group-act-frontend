import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GroupPage } from './GroupPage';
import { MockAuthProvider } from '../../services/AuthService/AuthService';
import { MockGroupProvider } from '../../services/GroupService/GroupService';

export default {
  title: 'GroupPage',
  component: GroupPage,
  decorators: [
    (Story) => (
      <MockGroupProvider>
        <MockAuthProvider>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </MockAuthProvider>
      </MockGroupProvider>
    ),
  ],
};

export const groupPage = () => {
  return <GroupPage />;
};

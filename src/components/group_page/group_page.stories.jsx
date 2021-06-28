import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GroupPage } from './group_page';
import { MockAuthProvider } from '../../services/AuthService/AuthService';
import { MockGroupProvider } from '../../services/GroupService/GroupService';

export default {
  title: 'GroupPage',
  component: GroupPage,
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

export const groupPage = () => {
  return <GroupPage />;
};

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GroupPage } from './group_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';
import { MockGroupProvider } from '../../services/group_service/group_service';

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

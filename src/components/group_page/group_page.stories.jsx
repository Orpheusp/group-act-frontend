import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GroupPage } from './group_page';
import { MockAuthProvider } from '../../services/auth_service/auth_service';

export default {
  title: 'GroupPage',
  component: GroupPage,
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

export const groupPage = () => {
  return <GroupPage />;
};

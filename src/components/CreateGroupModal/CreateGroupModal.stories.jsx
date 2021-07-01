import React from 'react';

import { CreateGroupModal } from './CreateGroupModal.jsx';

export default {
  title: 'CreateGroupModal',
  component: CreateGroupModal,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const createGroupModalOpen = () => {
  return (
    <CreateGroupModal
      isOpen={true}
      toggle={() => {
        console.log('toggle');
      }}
      onSubmit={(value) => console.log(value)}
    />
  );
};

export const createGroupModalClosed = () => {
  return (
    <CreateGroupModal
      isOpen={false}
      toggle={() => {
        console.log('toggle');
      }}
      onSubmit={(value) => console.log(value)}
    />
  );
};

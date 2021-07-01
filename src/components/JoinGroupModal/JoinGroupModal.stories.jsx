import React from 'react';

import { JoinGroupModal } from './JoinGroupModal.jsx';

export default {
  title: 'JoinGroupModal',
  component: JoinGroupModal,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const joinGroupModalOpen = () => {
  return (
    <JoinGroupModal
      isOpen={true}
      toggle={() => {
        console.log('toggle');
      }}
      onSubmit={(value) => console.log(value)}
    />
  );
};

export const joinGroupModalClosed = () => {
  return (
    <JoinGroupModal
      isOpen={false}
      toggle={() => {
        console.log('toggle');
      }}
      onSubmit={(value) => console.log(value)}
    />
  );
};

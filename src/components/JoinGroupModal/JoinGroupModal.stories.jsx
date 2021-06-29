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
      onSubmit={(password, inviteCode) => console.log(password, inviteCode)}
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
      onSubmit={(password, inviteCode) => console.log(password, inviteCode)}
    />
  );
};

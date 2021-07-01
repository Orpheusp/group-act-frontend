import React from 'react';

import { ActivitySelectionModal } from './ActivitySelectionModal.jsx';

export default {
  title: 'ActivitySelectionModal',
  component: ActivitySelectionModal,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

const activities = [0, 5, 6, 7, 8, 10, 12, 14, 15, 16, 17, 19, 21, 22, 23];

export const activitySelectionModalVisible = () => {
  return (
    <ActivitySelectionModal
      isOpen={true}
      toggle={() => {}}
      activities={activities}
      onSelect={(value) => console.log(value)}
    />
  );
};

export const activitySelectionModalInvisible = () => {
  return (
    <ActivitySelectionModal
      isOpen={false}
      toggle={() => {}}
      activities={activities}
      onSelect={(value) => console.log(value)}
    />
  );
};

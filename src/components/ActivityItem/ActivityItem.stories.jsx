import React from 'react';

import { ActivityItem, ACTIVITY_ITEM_MODE } from './ActivityItem';

export default {
  title: 'ActivityItem',
  component: ActivityItem,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const activityItemEditing = () => {
  return (
    <ActivityItem
      activity={1}
      mode={ACTIVITY_ITEM_MODE.EDITING}
      select={() => {
        console.log('select()');
      }}
      moveUp={() => {
        console.log('moveUp()');
      }}
      moveDown={() => {
        console.log('moveDown()');
      }}
      remove={() => {
        console.log('remove()');
      }}
      index={12}
    />
  );
};

export const activityItemViewing = () => {
  return <ActivityItem activity={1} index={12} />;
};

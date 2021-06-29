import React from 'react';

import { ActivityItem } from './ActivityItem';

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

export const activityItem = () => {
  return (
    <ActivityItem
      activity={1}
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

export const activityItemReadonly = () => {
  return (
    <ActivityItem
      activity={1}
      readonly={true}
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

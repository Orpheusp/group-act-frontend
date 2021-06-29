import React from 'react';

import { ActivityList } from './ActivityList';

export default {
  title: 'ActivityList',
  component: ActivityList,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const activityListReadonly = () => {
  return (
    <ActivityList readonly={true} activityPreferences={[2, 15, 6, 7, 9, 21]} />
  );
};

export const activityList = () => {
  return (
    <ActivityList
      readonly={false}
      activityPreferences={[2, 15, 6, 7, 9, 21]}
      onPreferencesChange={(preferences) => {
        console.log(preferences);
      }}
    />
  );
};

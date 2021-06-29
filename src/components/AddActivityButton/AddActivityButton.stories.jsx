import React from 'react';

import { AddActivityButton } from './AddActivityButton';

export default {
  title: 'AddActivityButton',
  component: AddActivityButton,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const addActivityButton = () => {
  return <AddActivityButton onClick={() => console.log('click()')} />;
};

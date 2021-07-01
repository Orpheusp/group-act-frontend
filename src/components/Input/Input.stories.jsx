import React from 'react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const inputEmpty = () => {
  return <Input label={'test label'} placeholder={'+11234567890'} />;
};

export const inputFilled = () => {
  return (
    <Input
      label={'test label'}
      placeholder={'+11234567890'}
      value={'+16145865715'}
    />
  );
};

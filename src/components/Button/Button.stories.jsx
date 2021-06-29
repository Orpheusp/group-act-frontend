import React from 'react';

import { Button, BUTTON_STYLE } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const buttonBlack = () => {
  return <Button text={'test'} buttonStyle={BUTTON_STYLE.BLACK} />;
};

export const buttonGreen = () => {
  return <Button text={'test'} buttonStyle={BUTTON_STYLE.GREEN} />;
};

export const buttonHollow = () => {
  return <Button text={'test'} buttonStyle={BUTTON_STYLE.HOLLOW} />;
};

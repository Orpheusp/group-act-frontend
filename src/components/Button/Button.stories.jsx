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

export const buttonBlackDisabled = () => {
  return (
    <Button text={'test'} buttonStyle={BUTTON_STYLE.BLACK} disabled={true} />
  );
};

export const buttonGreen = () => {
  return <Button text={'test'} buttonStyle={BUTTON_STYLE.GREEN} />;
};

export const buttonGreenDisabled = () => {
  return (
    <Button text={'test'} buttonStyle={BUTTON_STYLE.GREEN} disabled={true} />
  );
};

export const buttonHollow = () => {
  return <Button text={'test'} buttonStyle={BUTTON_STYLE.HOLLOW} />;
};

export const buttonHollowDisabled = () => {
  return (
    <Button text={'test'} buttonStyle={BUTTON_STYLE.HOLLOW} disabled={true} />
  );
};

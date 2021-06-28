import React from 'react';

import { CodeInput } from './CodeInput.jsx';

export default {
  title: 'CodeInput',
  component: CodeInput,
  decorators: [
    (Story) => (
      <div className={'story-container'}>
        <Story />
      </div>
    ),
  ],
};

export const codeInputFour = () => {
  return <CodeInput codeLength={4} onSubmit={(value) => console.log(value)} />;
};

export const codeInputSix = () => {
  return <CodeInput codeLength={6} onSubmit={(value) => console.log(value)} />;
};

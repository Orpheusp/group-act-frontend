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
  return (
    <CodeInput
      code={['a', 'b', 'c', 'd']}
      label={'Verification Code'}
      onChange={(v) => console.log(v)}
    />
  );
};

export const codeInputSix = () => {
  return (
    <CodeInput
      code={[1, 9, 4, 5, 8, 0]}
      label={'Verification Code'}
      onChange={(v) => console.log(v)}
    />
  );
};

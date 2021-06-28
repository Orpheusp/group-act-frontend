import React from 'react';

import './SubHeader.css';

export function SubHeader({ text, ...rest }) {
  return (
    <div className={'sub-header'} {...rest}>
      {text}
    </div>
  );
}

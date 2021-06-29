import React, { useState } from 'react';

import { Button, BUTTON_STYLE } from '../Button/Button';

import './CodeInput.css';

export function CodeInput({ codeLength, onSubmit, submitText }) {
  const [code, setCode] = useState(new Array(codeLength).fill(''));
  const handleChange = (element, index) => {
    setCode(code.map((val, i) => (i === index ? element.value : val)));
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    } else if (!element.value && element.previousSibling) {
      element.previousSibling.focus();
    }
  };

  const codeOutput = code.join('');

  return (
    <div className="code-input">
      <div className="code-input--code-fields">
        {code.map((data, index) => {
          return (
            <input
              className="code-input--code-field"
              type="text"
              maxLength="1"
              key={index}
              value={data}
              placeholder={''}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>

      <Button
        text={'Clear'}
        buttonStyle={BUTTON_STYLE.HOLLOW}
        onClick={(e) => setCode([...code.map((v) => '')])}
      />
      <Button
        text={submitText}
        buttonStyle={BUTTON_STYLE.GREEN}
        disabled={!codeOutput || codeOutput.length !== codeLength}
        onClick={(e) => onSubmit(codeOutput)}
      />
    </div>
  );
}

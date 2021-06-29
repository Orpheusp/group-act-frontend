import React from 'react';

import './CodeInput.css';

export function CodeInput({ code, label, onChange }) {
  const handleChange = (index, element) => {
    onChange(index, element.value);
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    } else if (!element.value && element.previousSibling) {
      element.previousSibling.focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-input--label">{label}</div>
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
              onChange={(e) => handleChange(index, e.target)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
    </div>
  );
}

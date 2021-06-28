import React from 'react';
import './Input.css';

export function Input({ label, ...rest }) {
  return (
    <div className="input">
      <div className="input--label">{label}</div>
      <input className="input--input" type="text" {...rest} />
    </div>
  );
}

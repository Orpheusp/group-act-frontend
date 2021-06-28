import React from 'react';
import './Header.css';

export function Header({ text, ...rest }) {
  return (
    <div className="header" {...rest}>
      {text}
    </div>
  );
}

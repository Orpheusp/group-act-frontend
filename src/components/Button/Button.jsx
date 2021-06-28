import React from 'react';
import './Button.css';

export const BUTTON_STYLE = Object.freeze({
  BLACK: 'button__black',
  GREEN: 'button__green',
  HOLLOW: 'button__hollow',
});

export function Button({ buttonStyle = BUTTON_STYLE.BLACK, text, ...rest }) {
  return (
    <button className={`button ${buttonStyle}`} {...rest}>
      {' '}
      {text}{' '}
    </button>
  );
}

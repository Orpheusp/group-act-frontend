import React from 'react';
import './Button.css';

export function Button(props) {
  return (
    <div>
      <button className="buttonw"> {props.text} </button>
    </div>
  );
}

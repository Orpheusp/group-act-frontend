import React, { useState } from 'react';
import './BottomButton.css';

export function BottomButton() {
  const [bgcolor, setBgcolor] = useState('black');
  const [bottext, setBottext] = useState('Edit Personal Preference');
  function clickme() {
    if (bgcolor !== 'green') {
      setBgcolor('green');
    } else {
      setBgcolor('black');
    }
    if (bottext !== 'Done') {
      setBottext('Done');
    } else {
      setBottext('Edit Personal Preference');
    }
  }
  return (
    <button
      style={{ backgroundColor: bgcolor }}
      className="bottomButton"
      onClick={() => clickme()}
    >
      {bottext}
    </button>
  );
}

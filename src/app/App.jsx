import React, { useState } from 'react';
import './App.css';
// import { Header } from '../components/Header/Header';
// import { Button } from '../components/Button/Button';
// import { Input } from '../components/Input/Input';
// import { OTPBox } from '../components/Verification_input/Verification_input';
import { HeaderPref } from '../components/HeaderPref/HeaderPref';
import { ModalButton } from '../components/ModalButton/ModalButton';
// import { ActivityItem } from '../components/ActivityItem/ActivityItem';

export function App() {
  const [bgcolor, setBgcolor] = useState('black');
  const [bottext, setBottext] = useState('Edit Personal Preference');
  const [show, setShow] = useState(false);
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
    if (show !== true) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <Header />
      <div className="div1">
        <b>Phone Number</b>
        <Input />
        <Button text="Send verification code" />
      </div>
      <div>
        <OTPBox />
      </div> */}
      <div>
        <HeaderPref></HeaderPref>
        <div className="activity-list"></div>
        {show && <ModalButton buttonLabel="+"></ModalButton>}
        <div className="bottom_button">
          <button
            style={{ backgroundColor: bgcolor }}
            className="bottomButton"
            onClick={() => clickme()}
          >
            {bottext}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

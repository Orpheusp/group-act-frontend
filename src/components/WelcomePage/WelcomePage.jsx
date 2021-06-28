import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/AuthService/AuthService';
import { Header } from '../Header/Header';

import './WelcomePage.css';

const SUBMIT_BUTTON_STATE = Object.freeze({
  HIDDEN: 0,
  LOG_IN: 1,
  SIGN_UP: 2,
});

export function WelcomePage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [submitButtonState, setSubmitButtonState] = useState(
    SUBMIT_BUTTON_STATE.HIDDEN
  );

  const auth = useAuth();
  const history = useHistory();

  const getOtp = async () => {
    const accountExists = await auth.getOtp(phoneNumber);
    setSubmitButtonState(
      accountExists ? SUBMIT_BUTTON_STATE.LOG_IN : SUBMIT_BUTTON_STATE.SIGN_UP
    );
  };

  const signIn = async () => {
    await auth.signIn(phoneNumber, otp);
    history.replace('/user');
  };

  const signUp = async () => {
    await auth.signUp(phoneNumber, otp);
    history.replace('/user');
  };

  let submitButton = undefined;
  if (submitButtonState === SUBMIT_BUTTON_STATE.LOG_IN) {
    submitButton = <button onClick={signIn}>Log In</button>;
  } else if (submitButtonState === SUBMIT_BUTTON_STATE.SIGN_UP) {
    submitButton = <button onClick={signUp}>Sign Up</button>;
  }

  return (
    <div className={'WelcomePage'}>
      <Header text={'GROUP ACT'} />
      <input
        type="text"
        id="phone-number"
        value={phoneNumber}
        size="65"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={getOtp}>Send OTP</button>
      <input
        type="text"
        id="otp"
        value={otp}
        size="65"
        onChange={(e) => setOtp(e.target.value)}
      />
      {submitButton}
    </div>
  );
}

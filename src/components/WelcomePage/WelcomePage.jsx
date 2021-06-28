import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/AuthService/AuthService';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Button, BUTTON_STYLE } from '../Button/Button';
import { CodeInput } from '../CodeInput/CodeInput';

import './WelcomePage.css';

const SUBMISSION_STATE = Object.freeze({
  HIDDEN: 0,
  LOG_IN: 1,
  SIGN_UP: 2,
});

export function WelcomePage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submissionState, setSubmissionState] = useState(
    SUBMISSION_STATE.HIDDEN
  );

  const auth = useAuth();
  const history = useHistory();

  const getOtp = async () => {
    const accountExists = await auth.getOtp(phoneNumber);
    setSubmissionState(
      accountExists ? SUBMISSION_STATE.LOG_IN : SUBMISSION_STATE.SIGN_UP
    );
  };

  const signIn = async (otp) => {
    await auth.signIn(phoneNumber, otp);
    history.replace('/user');
  };

  const signUp = async (otp) => {
    await auth.signUp(phoneNumber, otp);
    history.replace('/user');
  };

  let submitSection = undefined;
  if (submissionState === SUBMISSION_STATE.LOG_IN) {
    submitSection = (
      <CodeInput codeLength={4} onSubmit={(val) => signIn(val)} />
    );
  } else if (submissionState === SUBMISSION_STATE.SIGN_UP) {
    submitSection = (
      <CodeInput codeLength={4} onSubmit={(val) => signUp(val)} />
    );
  }

  return (
    <div className={'welcome-page'}>
      <Header text={'group act'} />
      <Input
        id="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        label={'Phone Number'}
      />
      <Button
        buttonStyle={BUTTON_STYLE.BLACK}
        onClick={getOtp}
        text={'Send Verification Code'}
      />
      {submitSection}
    </div>
  );
}

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

const OTP_LENGTH = 6;

export function WelcomePage() {
  const [credential, setCredential] = useState({
    phoneNumber: '',
    otp: new Array(OTP_LENGTH).fill(''),
  });
  const [submissionState, setSubmissionState] = useState(
    SUBMISSION_STATE.HIDDEN
  );

  const auth = useAuth();
  const history = useHistory();

  const getOtp = async () => {
    const accountExists = await auth.getOtp(credential.phoneNumber);
    setSubmissionState(
      accountExists ? SUBMISSION_STATE.LOG_IN : SUBMISSION_STATE.SIGN_UP
    );
  };

  const submitSection = getSubmitSection(
    submissionState,
    credential,
    setCredential,
    auth,
    history
  );

  return (
    <div className={'welcome-page'}>
      <Header text={'group act'} />
      <Input
        id="phone-number"
        value={credential.phoneNumber}
        onChange={(e) =>
          setCredential({
            ...credential,
            phoneNumber: e.target.value,
          })
        }
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

function getSubmitSection(
  submissionState,
  credential,
  setCredential,
  auth,
  history
) {
  const otpOutput = credential.otp.join('');

  const signIn = async () => {
    await auth.signIn(credential.phoneNumber, otpOutput);
    history.replace('/user');
  };

  const signUp = async () => {
    await auth.signUp(credential.phoneNumber, otpOutput);
    history.replace('/user');
  };

  const updateOtp = (i, val) => {
    const newOtp = [...credential.otp];
    newOtp[i] = val;
    setCredential({
      ...credential,
      otp: newOtp,
    });
  };

  const resetOtp = () => {
    setCredential({
      ...credential,
      otp: new Array(OTP_LENGTH).fill(''),
    });
  };

  const clearButton = (
    <Button
      text={'Clear'}
      buttonStyle={BUTTON_STYLE.HOLLOW}
      disabled={!otpOutput}
      onClick={resetOtp}
    />
  );

  const otpInput = (
    <CodeInput
      code={credential.otp}
      label={'Verification Code'}
      onChange={updateOtp}
    />
  );

  if (submissionState === SUBMISSION_STATE.LOG_IN) {
    return (
      <React.Fragment>
        {otpInput}
        {clearButton}
        <Button
          text={'Log in'}
          buttonStyle={BUTTON_STYLE.GREEN}
          disabled={!otpOutput || otpOutput.length !== OTP_LENGTH}
          onClick={signIn}
        />
      </React.Fragment>
    );
  } else if (submissionState === SUBMISSION_STATE.SIGN_UP) {
    return (
      <React.Fragment>
        {otpInput}
        {clearButton}
        <Button
          text={'Sign up'}
          buttonStyle={BUTTON_STYLE.GREEN}
          disabled={!otpOutput || otpOutput.length !== OTP_LENGTH}
          onClick={signUp}
        />
      </React.Fragment>
    );
  }
}

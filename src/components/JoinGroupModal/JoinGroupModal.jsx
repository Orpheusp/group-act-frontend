import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Input } from '../Input/Input';
import { CodeInput } from '../CodeInput/CodeInput';
import { Button, BUTTON_STYLE } from '../Button/Button';

import './JoinGroupModal.css';

const INVITE_CODE_LENGTH = 4;

export function JoinGroupModal({ isOpen, toggle, onSubmit }) {
  const [groupInfo, setGroupInfo] = useState({
    password: '',
    inviteCode: new Array(INVITE_CODE_LENGTH).fill(''),
  });

  const inviteCodeOutput = groupInfo.inviteCode.join('');

  const updateInviteCode = (i, val) => {
    const newInviteCode = [...groupInfo.inviteCode];
    newInviteCode[i] = val;
    setGroupInfo({
      ...groupInfo,
      inviteCode: newInviteCode,
    });
  };

  const reset = () => {
    setGroupInfo({
      password: '',
      otp: new Array(INVITE_CODE_LENGTH).fill(''),
    });
  };

  const passwordInput = (
    <Input
      label={'Group Password'}
      type={'password'}
      value={groupInfo.password}
      onChange={(e) =>
        setGroupInfo({
          ...groupInfo,
          password: e.target.value,
        })
      }
    />
  );

  const inviteCodeInput = (
    <CodeInput
      code={groupInfo.inviteCode}
      label={'Invite Code'}
      onChange={updateInviteCode}
    />
  );

  const clearButton = (
    <Button
      text={'Clear All'}
      buttonStyle={BUTTON_STYLE.HOLLOW}
      disabled={!inviteCodeOutput}
      onClick={reset}
    />
  );

  const submitButton = (
    <Button
      text={'Join'}
      buttonStyle={BUTTON_STYLE.GREEN}
      disabled={
        !inviteCodeOutput || inviteCodeOutput.length !== INVITE_CODE_LENGTH
      }
      onClick={() => {
        onSubmit(groupInfo.password, inviteCodeOutput);
      }}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered={true}
      scrollable={true}
      className={'join-group-modal'}
      size={'sm'}
    >
      <ModalHeader toggle={toggle} className={'join-group-modal--header'}>
        Join A Group
      </ModalHeader>
      <ModalBody className={'join-group-modal--body'}>
        {passwordInput}
        {inviteCodeInput}
        {clearButton}
        {submitButton}
      </ModalBody>
    </Modal>
  );
}

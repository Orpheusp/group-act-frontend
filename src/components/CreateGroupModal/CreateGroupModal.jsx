import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Button, BUTTON_STYLE } from '../Button/Button';
import { Input } from '../Input/Input';

import './CreateGroupModal.css';

export function CreateGroupModal({ isOpen, toggle, onSubmit }) {
  const [groupInfo, setGroupInfo] = useState({ displayName: '', password: '' });

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered={true}
      scrollable={true}
      className={'create-group-modal'}
      size={'sm'}
    >
      <ModalHeader toggle={toggle} className={'create-group-modal--header'}>
        Create A Group
      </ModalHeader>
      <ModalBody className={'create-group-modal--body'}>
        <Input
          label={'Group Name'}
          placeholder={'sample group name'}
          value={groupInfo.displayName}
          onChange={(e) =>
            setGroupInfo({
              ...groupInfo,
              displayName: e.target.value,
            })
          }
        />
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
        <Button
          buttonStyle={BUTTON_STYLE.GREEN}
          onClick={() => onSubmit(groupInfo)}
          text={'Create'}
        />
      </ModalBody>
    </Modal>
  );
}

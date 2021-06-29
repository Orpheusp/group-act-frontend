import React from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { ACTIVITY_LIST } from '../../services/ActivityStore/ActivityList';

import './ActivitySelectionModal.css';

export function ActivitySelectionModal({
  isOpen,
  toggle,
  activities,
  onSelect,
}) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered={true}
      scrollable={true}
      className={'activity-selection-modal'}
      size={'sm'}
    >
      <ModalHeader
        toggle={toggle}
        className={'activity-selection-modal--header'}
      >
        Activity Options
      </ModalHeader>
      <ModalBody className={'activity-selection-modal--body'}>
        {activities.map((activity, index) => {
          return (
            <ActivityOption
              key={index}
              activity={activity}
              onClick={() => onSelect(activity)}
            />
          );
        })}
      </ModalBody>
    </Modal>
  );
}

function ActivityOption({ onClick, activity, ...rest }) {
  return (
    <div
      className={'activity-selection-modal--activity-option'}
      onClick={onClick}
      {...rest}
    >
      {ACTIVITY_LIST[activity]}
    </div>
  );
}

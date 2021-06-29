import React from 'react';

import { MdAdd } from 'react-icons/md';

import './AddActivityButton.css';

export function AddActivityButton({ onClick }) {
  return (
    <div className={'add-activity-button'} onClick={onClick}>
      <MdAdd className={'add-activity-button--icon'} />
    </div>
  );
}

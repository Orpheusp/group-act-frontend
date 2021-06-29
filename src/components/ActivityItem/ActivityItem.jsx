import React from 'react';

import { MdArrowUpward } from 'react-icons/md';
import { MdArrowDownward } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import { ACTIVITY_LIST } from '../../services/ActivityStore/ActivityList';

import './ActivityItem.css';

export const ACTIVITY_ITEM_MODE = Object.freeze({
  VIEWING: 'activity-item__viewing',
  EDITING: 'activity-item__editing',
});

export function ActivityItem({
  mode = ACTIVITY_ITEM_MODE.VIEWING,
  activity,
  select,
  moveUp,
  moveDown,
  remove,
  index,
  ...rest
}) {
  let actions;
  if (mode === ACTIVITY_ITEM_MODE.EDITING) {
    actions = (
      <div className={'activity-item--actions'}>
        <MdArrowUpward
          onClick={moveUp}
          className={'activity-item--action activity-item--move-up'}
        />
        <MdArrowDownward
          onClick={moveDown}
          className={'activity-item--action activity-item--move-down'}
        />
        <MdClose
          onClick={remove}
          className={'activity-item--action activity-item--remove'}
        />
      </div>
    );
  }

  return (
    <div className={`activity-item ${mode}`} {...rest}>
      <div className={'activity-item--index'}>{index}</div>
      <div className={'activity-item--label'} onClick={select}>
        {ACTIVITY_LIST[activity]}
      </div>
      {actions}
    </div>
  );
}

import React from 'react';

import { MdArrowUpward } from 'react-icons/md';
import { MdArrowDownward } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import { ACTIVITY_LIST } from '../../ActivityList';

import './ActivityItem.css';

export function ActivityItem({
  readonly = false,
  activity,
  select,
  moveUp,
  moveDown,
  remove,
  index,
}) {
  let parentClassName = 'activity-item';
  let actions;
  if (readonly) {
    parentClassName = 'activity-item activity-item__readonly';
  } else {
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
    <div className={parentClassName} key={activity}>
      <div className={'activity-item--index'}>{index}</div>
      <div className={'activity-item--label'} onClick={select}>
        {ACTIVITY_LIST[activity]}
      </div>
      {actions}
    </div>
  );
}

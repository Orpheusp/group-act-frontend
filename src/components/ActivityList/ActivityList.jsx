import React, { useState } from 'react';

import { Button, BUTTON_STYLE } from '../../components/Button/Button';
// import { ACTIVITY_LIST } from '../../services/ActivityStore/ActivityList';
import { ActivitySelectionModal } from '../ActivitySelectionModal/ActivitySelectionModal';
import { ActivityItem, ACTIVITY_ITEM_MODE } from '../ActivityItem/ActivityItem';
import {
  makeActivityStore,
  getSelectedActivities,
  getUnselectedActivities,
  upvoteSelectedActivity,
  downvoteSelectedActivity,
  unselectActivity,
  replaceSelectedActivity,
  selectActivity,
} from '../../services/ActivityStore/ActivityStore';

import './ActivityList.css';
import { AddActivityButton } from '../AddActivityButton/AddActivityButton';

export function ActivityList({
  readonly,
  activityPreferences,
  onPreferencesChange,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemMode, setItemMode] = useState(ACTIVITY_ITEM_MODE.VIEWING);
  const [activityStore, setActivityStore] = useState(
    makeActivityStore(activityPreferences)
  );
  const [activityToReplace, setActivityToReplace] = useState(null);

  if (readonly) {
    return (
      <div className={'activity-form'}>
        {activityPreferences.map((activity, index) => {
          return (
            <ActivityItem activity={activity} index={index + 1} key={index} />
          );
        })}
      </div>
    );
  }

  const selectedActivities = getSelectedActivities(activityStore);
  const unselectedActivities = getUnselectedActivities(activityStore);

  const cancelModal = () => {
    setModalVisible(false);
    setActivityToReplace(null);
  };

  const handleModalSelect = (activity) => {
    const newActivity = activity;
    setModalVisible(false);
    let newActivityStore;
    if (activityToReplace) {
      newActivityStore = replaceSelectedActivity(
        activityStore,
        activityToReplace,
        newActivity
      );
    } else {
      newActivityStore = selectActivity(activityStore, newActivity);
    }
    setActivityStore(newActivityStore);
    setActivityToReplace(null);
  };

  const addActivity = () => {
    setActivityToReplace(null);
    setModalVisible(true);
  };

  const addActivityButton =
    itemMode === ACTIVITY_ITEM_MODE.VIEWING ? undefined : (
      <AddActivityButton onClick={addActivity} />
    );

  return (
    <div className={'activity-list'}>
      {selectedActivities.map((activity, index) =>
        getActivityItem(
          itemMode,
          activity,
          index,
          activityStore,
          setActivityStore,
          setActivityToReplace,
          setModalVisible
        )
      )}
      {addActivityButton}
      <ActivitySelectionModal
        isOpen={modalVisible}
        toggle={cancelModal}
        activities={unselectedActivities}
        onSelect={handleModalSelect}
      />
      <div className={'activity-list--edit-button-container'}>
        {getEditButton(
          itemMode,
          setItemMode,
          onPreferencesChange,
          selectedActivities
        )}
      </div>
    </div>
  );
}

function getActivityItem(
  itemMode,
  activity,
  index,
  activityStore,
  setActivityStore,
  setActivityToReplace,
  setModalVisible
) {
  const select = () => {
    setActivityToReplace(activity);
    setModalVisible(true);
  };

  const moveUp = () => {
    const newActivityStore = upvoteSelectedActivity(activityStore, activity);
    setActivityStore(newActivityStore);
  };

  const moveDown = () => {
    const newActivityStore = downvoteSelectedActivity(activityStore, activity);
    setActivityStore(newActivityStore);
  };

  const remove = () => {
    const newActivityStore = unselectActivity(activityStore, activity);
    setActivityStore(newActivityStore);
  };

  return (
    <ActivityItem
      mode={itemMode}
      key={`${activity} ${index}`}
      activity={activity}
      select={select}
      moveUp={moveUp}
      moveDown={moveDown}
      remove={remove}
      index={index + 1}
    />
  );
}

function getEditButton(
  itemMode,
  setItemMode,
  onPreferencesChange,
  selectedActivities
) {
  const startEditing = () => {
    setItemMode(ACTIVITY_ITEM_MODE.EDITING);
  };

  const finishEditing = () => {
    setItemMode(ACTIVITY_ITEM_MODE.VIEWING);
    onPreferencesChange(selectedActivities);
  };

  if (itemMode === ACTIVITY_ITEM_MODE.VIEWING) {
    return (
      <Button
        text={'Edit preferences'}
        buttonStyle={BUTTON_STYLE.BLACK}
        onClick={startEditing}
      />
    );
  } else {
    return (
      <Button
        text={'Done'}
        buttonStyle={BUTTON_STYLE.GREEN}
        onClick={finishEditing}
      />
    );
  }
}

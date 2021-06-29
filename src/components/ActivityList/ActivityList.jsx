import React, { useState } from 'react';

import { Button, BUTTON_STYLE } from '../../components/Button/Button';
// import { ACTIVITY_LIST } from '../../services/ActivityStore/ActivityList';
import { ActivitySelectionModal } from '../ActivitySelectionModal/ActivitySelectionModal';
import { ActivityItem, ACTIVITY_ITEM_MODE } from '../ActivityItem/ActivityItem';

import './ActivityList.css';

export function ActivityList({ readonly, activityPreferences, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemMode] = useState(ACTIVITY_ITEM_MODE.VIEWING);
  const [currentSelectedActivities] = useState(activityPreferences);

  if (readonly) {
    return (
      <div className={'activity-form'}>
        {activityPreferences.map((activity, index) => {
          return (
            <ActivityItem
              readonly={true}
              activity={activity}
              index={index + 1}
            />
          );
        })}
      </div>
    );
  }

  const toggleModal = () => setModalVisible(!modalVisible);

  const handleSelect = (activity) => {
    setModalVisible(true);
  };

  let button;

  if (itemMode === ACTIVITY_ITEM_MODE.VIEWING) {
    button = (
      <Button text={'Edit preferences'} buttonStyle={BUTTON_STYLE.BLACK} />
    );
  } else {
    button = <Button text={'Done'} buttonStyle={BUTTON_STYLE.GREEN} />;
  }

  return (
    <div className={'activity-form'}>
      {currentSelectedActivities.map((activity, index) => {
        return (
          <ActivityItem
            mode={itemMode}
            key={activity}
            activity={activity}
            select={handleSelect}
            moveUp={() => {}}
            moveDown={() => {}}
            remove={() => {}}
            index={index + 1}
          />
        );
      })}
      <ActivitySelectionModal
        isOpen={modalVisible}
        toggle={toggleModal}
        activities={currentSelectedActivities}
        onSelect={handleSelect}
      />
      {button}
    </div>
  );
}

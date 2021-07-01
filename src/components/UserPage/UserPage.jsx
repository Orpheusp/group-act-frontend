import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { Header } from '../Header/Header';
import { useAuth } from '../../services/AuthService/AuthService';
import { useGroup } from '../../services/GroupService/GroupService';
import { SubHeader } from '../SubHeader/SubHeader';
import { ActivityList } from '../ActivityList/ActivityList';
import { Button, BUTTON_STYLE } from '../Button/Button';
import { CreateGroupModal } from '../CreateGroupModal/CreateGroupModal';
import { JoinGroupModal } from '../JoinGroupModal/JoinGroupModal';

import './UserPage.css';

export function UserPage() {
  const auth = useAuth();
  const history = useHistory();
  const group = useGroup();

  const [modalVisible, setModalVisible] = useState({
    joinGroupModal: false,
    createGroupModal: false,
  });

  const logOut = async () => {
    await auth.signOut();
    history.replace('/');
    console.log('logged out.');
  };

  const joinGroup = async ({ inviteCode, password }) => {
    await group.joinGroup(inviteCode, password);
    history.replace('/group');
    console.log('group entered');
  };

  const createGroup = async ({ displayName, password }) => {
    await group.createGroup(displayName, password);
    history.replace('/group');
    console.log('group entered');
  };

  const submitPreferenceChange = async (newPreferences) => {
    if (arrayEqual(auth.user.preferences, newPreferences)) {
      return;
    }
    await auth.updatePreferences(newPreferences);
    console.log('user preferences updated');
  };

  const closeModal = () => {
    setModalVisible({
      createGroupModal: false,
      joinGroupModal: false,
    });
  };

  const openJoinGroupModal = () => {
    setModalVisible({
      createGroupModal: false,
      joinGroupModal: true,
    });
  };

  const openCreateGroupModal = () => {
    setModalVisible({
      createGroupModal: true,
      joinGroupModal: false,
    });
  };

  return (
    <div className={'user-page'}>
      <SubHeader text={`USER NAME: ${auth.user.displayName}`} />
      <Header text={'personal preference'} />
      <Button
        onClick={openJoinGroupModal}
        text={'Join group'}
        buttonStyle={BUTTON_STYLE.BLACK}
      />
      <Button
        onClick={openCreateGroupModal}
        text={'Create group'}
        buttonStyle={BUTTON_STYLE.HOLLOW}
      />
      <Button
        onClick={logOut}
        text={'Log out'}
        buttonStyle={BUTTON_STYLE.HOLLOW}
      />
      <ActivityList
        readonly={false}
        activityPreferences={auth.user.preferences || []}
        onPreferencesChange={submitPreferenceChange}
      />
      <CreateGroupModal
        isOpen={modalVisible.createGroupModal}
        toggle={closeModal}
        onSubmit={(value) => createGroup(value)}
      />
      <JoinGroupModal
        isOpen={modalVisible.joinGroupModal}
        toggle={closeModal}
        onSubmit={(value) => joinGroup(value)}
      />
    </div>
  );
}

function arrayEqual(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  );
}

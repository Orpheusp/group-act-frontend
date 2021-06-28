import React, { useContext, createContext, useState } from 'react';

import {
  sendGetGroupRequest,
  sendJoinGroupRequest,
  sendCreateGroupRequest,
} from './GroupRequestActions';

const groupContext = createContext();

export function GroupProvider({ children }) {
  const group = useGroupProvider();
  return (
    <groupContext.Provider value={group}>{children}</groupContext.Provider>
  );
}

export function useGroup() {
  return useContext(groupContext);
}

function useGroupProvider() {
  const [group, setGroup] = useState(null);

  const refreshGroup = async () => {
    if (!group) {
      return;
    }

    const groupId = group['_id']['$oid'];
    const newGroup = await sendGetGroupRequest(groupId);
    setGroup(newGroup);
  };

  const joinGroup = async (inviteCode, password) => {
    if (group) {
      console.log('Already in a group.');
    } else {
      const newGroup = await sendJoinGroupRequest(inviteCode, password);
      setGroup(newGroup);
    }
  };

  const createGroup = async (displayName, password) => {
    if (group) {
      console.log('Already in a group.');
    } else {
      const newGroup = await sendCreateGroupRequest(displayName, password);
      setGroup(newGroup);
    }
  };

  return {
    group,
    refreshGroup,
    joinGroup,
    createGroup,
  };
}

export function MockGroupProvider({ children, group = mockGroup }) {
  const mockGroupContext = {
    group,
    refreshGroup: () => {
      console.log('refreshGroup() called.');
    },
    joinGroup: (inviteCode, password) => {
      console.log(`joinGroup(${inviteCode}, ${password}) called.`);
    },
    createGroup: (displayName, password) => {
      console.log(`createGroup(${displayName}, ${password}) called.`);
    },
  };
  return (
    <groupContext.Provider value={mockGroupContext}>
      {children}
    </groupContext.Provider>
  );
}

const mockGroup = {
  _id: { $oid: '60d78e742bf0316e5e73b0ac' },
  createdTime: { $date: 1624739444679 },
  creatorId: { $oid: '60c82ee919a4e440b95a7a1f' },
  displayName: 'test group',
  expiryTime: { $date: 1624743044679 },
  inviteCode: 'rhhg',
  members: [{ $oid: '60c82ee919a4e440b95a7a1f' }],
  passwordHash: '$2b$16$wVAPbXWM5.tY3jT/kqPs.OGh7LgMkLHQOx4qPDXPusHcDQ8UwqPSC',
  preferences: [],
};

import React, { useContext, createContext, useState } from 'react';

import {
  sendGetGroupRequest,
  sendJoinGroupRequest,
  sendCreateGroupRequest,
} from './group_request_actions';

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

export function MockGroupProvider({ children, mockGroup = null }) {
  const mockGroupContext = {
    group: mockGroup,
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

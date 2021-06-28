import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/AuthService/AuthService';
import { useGroup } from '../../services/group_service/group_service';

export function UserPage() {
  const auth = useAuth();
  const history = useHistory();
  const group = useGroup();

  const [inviteCode, setInviteCode] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [newGroupPassword, setNewGroupPassword] = useState('');

  const logOut = async () => {
    await auth.signOut();
    history.replace('/');
    console.log('logged out.');
  };

  const joinGroup = async () => {
    await group.joinGroup(inviteCode, password);
    history.replace('/group');
    console.log('group entered');
  };

  const createGroup = async () => {
    await group.createGroup(displayName, newGroupPassword);
    history.replace('/group');
    console.log('group entered');
  };

  return (
    <div>
      <div>User Front Page</div>
      <div>{JSON.stringify(auth.user)}</div>
      <div>
        Join Group
        <input
          type="text"
          id="invite-code"
          value={inviteCode}
          size="65"
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          size="65"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={joinGroup}>Join Group</button>
      </div>
      <div>
        Create Group
        <input
          type="text"
          id="display-name"
          value={displayName}
          size="65"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="password"
          id="new-group-password"
          value={newGroupPassword}
          size="65"
          onChange={(e) => setNewGroupPassword(e.target.value)}
        />
        <button onClick={createGroup}>Create Group</button>
      </div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

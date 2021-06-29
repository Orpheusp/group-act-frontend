import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/AuthService/AuthService';
import { useGroup } from '../../services/GroupService/GroupService';
import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';

import './GroupPage.css';

export function GroupPage() {
  const auth = useAuth();
  const history = useHistory();
  const group = useGroup();

  const logOut = () => {
    auth.signOut(() => {
      history.replace('/');
      console.log('logged out.');
    });
  };

  // Update group status every 15s.
  useEffect(() => {
    const id = setInterval(async () => {
      group.refreshGroup();
    }, 15 * 1000);

    return () => clearInterval(id);
  }, [group, group.group]);

  const groupSize = group.group?.members?.length || 0;
  const inviteCode = group.group?.inviteCode || '';

  return (
    <div className={'group-page'}>
      <Header text={'group priority list'} />
      <SubHeader text={`group size: ${groupSize}`} />
      <SubHeader text={`invite code: ${inviteCode}`} />
      <div>{JSON.stringify(group.group)}</div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
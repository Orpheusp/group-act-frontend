import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../services/AuthService/AuthService';
import { useGroup } from '../../services/group_service/group_service';

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

  return (
    <div>
      <div>Group Front Page</div>
      <div>{JSON.stringify(group.group)}</div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

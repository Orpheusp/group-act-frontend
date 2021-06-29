import React, { useEffect } from 'react';

import { useGroup } from '../../services/GroupService/GroupService';
import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { ActivityList } from '../ActivityList/ActivityList';

import './GroupPage.css';

export function GroupPage() {
  const group = useGroup();

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
      <ActivityList
        readonly={true}
        activityPreferences={getActivities(group.group?.preferences || [])}
      />
    </div>
  );
}

function getActivities(preferences) {
  return preferences.map(({ activityType }) => activityType);
}

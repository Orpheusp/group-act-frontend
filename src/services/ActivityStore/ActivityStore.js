import { ACTIVITY_LIST } from './ActivityList';

// ActivityStore contains two types of entries:
// 1. Selected Entry: <key: activity, value: {selected: true, rank: <rank>}>
// 2. Unselected Entry: <key: activity, value: {selected: false}>
export function makeActivityStore(activityPreferences) {
  const activityStore = {};
  Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
    activityStore[activity] = { selected: false };
  });

  activityPreferences.forEach((activity, i) => {
    activityStore[activity] = { selected: true, rank: i };
  });

  return activityStore;
}

// Get all selected activities, not sorted.
function _getSelectedActivities(activityStore) {
  let entries = Object.entries(activityStore).filter(
    ([key, value]) => value.selected
  );

  entries = entries.map(([key, value]) => key);

  return entries;
}

// Get all selected activities, sorted by their activity rank.
export function getSelectedActivities(activityStore) {
  let entries = Object.entries(activityStore).filter(
    ([key, value]) => value.selected
  );

  entries = entries.map(([key, value]) => {
    return {
      activity: key,
      rank: value.rank,
    };
  });
  entries.sort((a, b) => a.rank - b.rank);
  return entries.map(({ activity }) => Number(activity));
}

// Get all unselected activities, sorted by their activity index number.
export function getUnselectedActivities(activityStore) {
  return Object.entries(ACTIVITY_LIST)
    .filter(([activity]) => !activityStore[activity].selected)
    .map(([activity]) => Number(activity));
}

// unselect an activity from the selected list, and update the ranking of the
// rest of the selected activities.
export function unselectActivity(activityStore, activity) {
  if (!activityStore[activity].selected) {
    return activityStore;
  }
  const previousRank = activityStore[activity].rank;

  const newAcvitityStore = { ...activityStore };

  // Unselect an activity
  newAcvitityStore[activity].selected = false;
  delete newAcvitityStore[activity].rank;

  // Upvote all below-rank activities.
  Object.entries(newAcvitityStore).forEach(([key, value]) => {
    if (!value.selected || value.rank < previousRank) {
      return;
    }

    value.rank = value.rank - 1;
  });

  return newAcvitityStore;
}

// Select an activity from the selected list, and append it to the end of the
// selected activity list.
export function selectActivity(activityStore, activity) {
  if (activityStore[activity].selected) {
    return activityStore;
  }

  const selectedActivities = _getSelectedActivities(activityStore);
  const newRank = selectedActivities.length;

  const newAcvitityStore = { ...activityStore };

  // Select an activity
  newAcvitityStore[activity].selected = true;
  newAcvitityStore[activity].rank = newRank;

  return newAcvitityStore;
}

function findActivityWithRank(activityStore, rank) {
  const targets = Object.entries(activityStore).filter(
    ([key, value]) => value.rank === rank
  );
  if (!targets.length) {
    return;
  }
  const [key] = targets[0];
  return key;
}

// Move selected activity up one position.
export function upvoteSelectedActivity(activityStore, activity) {
  if (!activityStore[activity].selected) {
    return activityStore;
  }

  const rank = activityStore[activity].rank;

  // Downvote the activity with 1 rank higher.
  const previousActivity = findActivityWithRank(activityStore, rank - 1);

  if (!previousActivity) {
    return activityStore;
  }

  const newAcvitityStore = { ...activityStore };
  newAcvitityStore[activity].rank = rank - 1;
  newAcvitityStore[previousActivity].rank = rank;

  return newAcvitityStore;
}

// Move selected activity down one position.
export function downvoteSelectedActivity(activityStore, activity) {
  if (!activityStore[activity].selected) {
    return activityStore;
  }

  const rank = activityStore[activity].rank;

  // Upvote the activity with 1 rank higher.
  const nextActivity = findActivityWithRank(activityStore, rank + 1);

  if (!nextActivity) {
    return activityStore;
  }

  const newAcvitityStore = { ...activityStore };
  newAcvitityStore[activity].rank = rank + 1;
  newAcvitityStore[nextActivity].rank = rank;

  return newAcvitityStore;
}

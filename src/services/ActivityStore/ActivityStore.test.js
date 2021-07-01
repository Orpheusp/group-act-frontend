import {
  makeActivityStore,
  getSelectedActivities,
  getUnselectedActivities,
  unselectActivity,
  selectActivity,
  replaceSelectedActivity,
  upvoteSelectedActivity,
  downvoteSelectedActivity,
} from './ActivityStore';

import { ACTIVITY_LIST } from './ActivityList';

describe('ActivityStore', () => {
  const selectedActivities = [14, 1, 10];
  let store;

  beforeEach(() => {
    store = makeActivityStore(selectedActivities);
  });

  test('makeActivityStore', () => {
    selectedActivities.forEach((activity, index) => {
      expect(store[activity]).toStrictEqual({
        selected: true,
        rank: index,
      });
    });

    Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
      if (selectedActivities.includes(Number(activity))) {
        return;
      }
      expect(store[activity]).toStrictEqual({
        selected: false,
      });
    });
  });

  test('getSelectedActivities', () => {
    const activities = getSelectedActivities(store);
    expect(activities).toStrictEqual(selectedActivities);
  });

  test('getUnselectedActivities', () => {
    const activities = getUnselectedActivities(store);

    activities.forEach((activity, index) => {
      expect(selectedActivities.includes(Number(activity))).toBe(false);
      expect(index === 0 || activities[index - 1] < activities[index]).toBe(
        true
      );
    });
  });

  describe('unselectActivity', () => {
    test('unselect first selected activity', () => {
      const activity = 14;
      const newStore = unselectActivity(store, activity);
      expect(newStore).not.toBe(store);
      expect(newStore[activity]).toStrictEqual({
        selected: false,
      });
      expect(newStore[1]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('unselect mid selected activity', () => {
      const activity = 1;
      const newStore = unselectActivity(store, activity);
      expect(newStore).not.toBe(store);
      expect(newStore[activity]).toStrictEqual({
        selected: false,
      });
      expect(newStore[14]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('unselect last selected activity', () => {
      const activity = 10;
      const newStore = unselectActivity(store, activity);
      expect(newStore).not.toBe(store);
      expect(newStore[activity]).toStrictEqual({
        selected: false,
      });
      expect(newStore[14]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[1]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('unselect an already unselected activity', () => {
      const activity = 20;
      const newStore = unselectActivity(store, activity);
      expect(newStore).toBe(store);
    });
  });

  describe('selectActivity', () => {
    test('selects an unselected activity', () => {
      const activity = 5;
      const newStore = selectActivity(store, activity);
      expect(newStore).not.toBe(store);

      expect(newStore[activity]).toStrictEqual({
        selected: true,
        rank: 3,
      });

      selectedActivities.forEach((activity, i) => {
        expect(newStore[activity]).toStrictEqual({
          selected: true,
          rank: i,
        });
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (
          selectedActivities.includes(Number(activity)) ||
          Number(activity) === 5
        ) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });
    test('selects an already selected activity', () => {
      const activity = 14;
      const newStore = selectActivity(store, activity);
      expect(newStore).toBe(store);
    });
  });

  describe('replaceSelectedActivity', () => {
    test('replaces a selected activity with a selected activity', () => {
      const oldActivity = 14;
      const newActivity = 10;
      const newStore = replaceSelectedActivity(store, oldActivity, newActivity);
      expect(newStore).toBe(store);
    });

    test('replaces a selected activity with an unselected activity', () => {
      const oldActivity = 14;
      const newActivity = 2;
      const newStore = replaceSelectedActivity(store, oldActivity, newActivity);
      expect(newStore).not.toBe(store);

      expect(newStore[oldActivity]).toStrictEqual({
        selected: false,
      });

      expect(newStore[newActivity]).toStrictEqual({
        selected: true,
        rank: 0,
      });

      expect(newStore[1]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 2,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (
          selectedActivities.includes(Number(activity)) ||
          Number(activity) === 2
        ) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('replaces an unselected activity with a selected activity', () => {
      const oldActivity = 2;
      const newActivity = 10;
      const newStore = replaceSelectedActivity(store, oldActivity, newActivity);
      expect(newStore).toBe(store);
    });

    test('replaces an unselected activity with an unselected activity', () => {
      const oldActivity = 2;
      const newActivity = 8;
      const newStore = replaceSelectedActivity(store, oldActivity, newActivity);
      expect(newStore).toBe(store);
    });
  });

  describe('upvoteSelectedActivity', () => {
    test('upvote first selected activity', () => {
      const activity = 14;
      const newStore = upvoteSelectedActivity(store, activity);
      expect(newStore).toBe(store);
    });

    test('upvote mid selected activity', () => {
      const activity = 1;
      const newStore = upvoteSelectedActivity(store, activity);
      expect(newStore).not.toBe(store);

      expect(newStore[14]).toStrictEqual({
        selected: true,
        rank: 1,
      });
      expect(newStore[activity]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 2,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('upvote last selected activity', () => {
      const activity = 10;
      const newStore = upvoteSelectedActivity(store, activity);
      expect(newStore).not.toBe(store);
      expect(newStore[14]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[1]).toStrictEqual({
        selected: true,
        rank: 2,
      });
      expect(newStore[activity]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });
  });

  describe('downvoteSelectedActivity', () => {
    test('downvote first selected activity', () => {
      const activity = 14;
      const newStore = downvoteSelectedActivity(store, activity);
      expect(newStore).not.toBe(store);

      expect(newStore[activity]).toStrictEqual({
        selected: true,
        rank: 1,
      });
      expect(newStore[1]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 2,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('downvote mid selected activity', () => {
      const activity = 1;
      const newStore = downvoteSelectedActivity(store, activity);
      expect(newStore).not.toBe(store);

      expect(newStore[14]).toStrictEqual({
        selected: true,
        rank: 0,
      });
      expect(newStore[activity]).toStrictEqual({
        selected: true,
        rank: 2,
      });
      expect(newStore[10]).toStrictEqual({
        selected: true,
        rank: 1,
      });

      Object.entries(ACTIVITY_LIST).forEach(([activity]) => {
        if (selectedActivities.includes(Number(activity))) {
          return;
        }
        expect(newStore[activity]).toStrictEqual({
          selected: false,
        });
      });
    });

    test('downvote last selected activity', () => {
      const activity = 10;
      const newStore = downvoteSelectedActivity(store, activity);
      expect(newStore).toBe(store);
    });
  });
});

import React, { useState } from 'react';
import ActivityForm from './ActivityForm';
import ActivityItem from './ActivityItem';
// import { Button, ButtonGroup } from 'reactstrap';

export function ActivityList() {
  const [activity, setActivity] = useState([]);
  const [hide, setHide] = useState([true, true, true, true, true]);

  const addAct = (act) => {
    const newActs = [act, ...activity];
    setActivity(newActs);
  };

  const removeAct = (id) => {
    const removedArr = [...activity].filter((todo) => todo.id !== id);
    const newArr = [...hide]; // copying the old datas array
    newArr[id] = !hide[id]; // replace e.target.value with whatever you want to change it to
    setHide(newArr);
    setActivity(removedArr);
  };

  return (
    <>
      <ActivityItem
        acts={activity}
        // completeTodo={completeTodo}
        removeAct={removeAct}
        // updateTodo={updateTodo}
      />
      <ActivityForm onClick={addAct} hide={hide} setHide={setHide} />
    </>
  );
}

import React from 'react';

import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

import './ActivityItem.css';

const ActivityItem = ({ acts, completeTodo, removeAct, updateTodo }) => {
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: '',
  // });

  // const submitUpdate = (value) => {
  //   updateTodo(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: '',
  //   });
  // };

  // if (edit.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  // }

  return acts.map((act, index) => (
    <div className="todo-row" key={index}>
      <div key={act.id}>{act.text}</div>
      <div className="icons">
        <AiFillCaretUp className="up" />
        {/* onClick={() => removeTodo(todo.id)} */}
        <AiFillCaretDown className="down" />
        <AiFillDelete onClick={() => removeAct(act.id)} className="remove" />
      </div>
    </div>
  ));
};

export default ActivityItem;

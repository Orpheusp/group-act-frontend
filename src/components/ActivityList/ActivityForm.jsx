import React, { useState } from 'react';
import './ActivityForm.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ActivityForm(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  // const [hide, setHide] = useState([true, true, true, true, true]);
  const toggle = () => setModal(!modal);
  // const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSubmit = (e) => {
    props.onClick({
      // id: Math.floor(Math.random() * 10000),
      id: e.target.id,
      text: e.target.value,
    });
    const newArr = [...props.hide]; // copying the old datas array
    newArr[e.target.id] = !props.hide[e.target.id]; // replace e.target.value with whatever you want to change it to
    props.setHide(newArr);
    setModal(!modal);
    // setInput('');
  };

  return (
    <div>
      <Button onClick={toggle} color="secondary" size="lg">
        Add a preference
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Option</ModalHeader>
        <ModalBody className={'mbody'}>
          {props.hide[0] ? (
            <button
              onClick={handleSubmit}
              value={'Activity Suggestion 1'}
              className={'options'}
              id="0"
            >
              Activity Suggestion 1
            </button>
          ) : null}
          {props.hide[1] ? (
            <button
              onClick={handleSubmit}
              value={'Activity Suggestion 2'}
              className={'options'}
              id="1"
            >
              Activity Suggestion 2
            </button>
          ) : null}
          {props.hide[2] ? (
            <button
              onClick={handleSubmit}
              value={'Activity Suggestion 3'}
              className={'options'}
              id={2}
            >
              Activity Suggestion 3
            </button>
          ) : null}
          {props.hide[3] ? (
            <button
              onClick={handleSubmit}
              value={'Activity Suggestion 4'}
              className={'options'}
              id={3}
            >
              Activity Suggestion 4
            </button>
          ) : null}
          {props.hide[4] ? (
            <button
              onClick={handleSubmit}
              value={'Activity Suggestion 5'}
              className={'options'}
              id={4}
            >
              Activity Suggestion 5
            </button>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    // <form onSubmit={handleSubmit} className='todo-form'>
    //     <>
    //       <input
    //         placeholder='Add a todo'
    //         value={input}
    //         onChange={handleChange}
    //         name='text'
    //         className='todo-input'
    //       />
    //       <button onClick={handleSubmit} className='todo-button'>
    //         Add todo
    //       </button>
    //     </>
    // </form>
  );
}

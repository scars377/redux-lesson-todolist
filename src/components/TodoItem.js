import React from 'react';

const TodoItem = ({ text = '', done = false, toggleDone = () => {} }) => {
  return (
    <li onClick={toggleDone}>
      {done ? <del>{text}</del> : <span>{text}</span>}
    </li>
  );
};

export default TodoItem;

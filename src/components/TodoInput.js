import React, { useState } from 'react';

const TodoInput = ({ addTodo = () => {} }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={text} onChange={onChangeText} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;

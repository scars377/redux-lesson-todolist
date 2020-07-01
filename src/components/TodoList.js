import React from 'react';
import TodoInput from '../containers/TodoInputContainer';
import TodoItem from '../containers/TodoItemContainer';

const TodoList = ({ items = [] }) => {
  return (
    <div>
      <TodoInput />
      {items.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;

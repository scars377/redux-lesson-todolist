import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

export default () => {
  const items = useSelector((state) => state.todoItems);

  return <TodoList items={items} />;
};

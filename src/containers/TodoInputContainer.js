import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import TodoInput from '../components/TodoInput';

export default () => {
  const dispatch = useDispatch();

  const addTodo = (text) => dispatch(actions.addTodo(text));

  return <TodoInput addTodo={addTodo} />;
};

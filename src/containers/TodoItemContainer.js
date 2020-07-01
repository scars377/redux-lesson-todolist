import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import TodoItem from '../components/TodoItem';

export default (ownProps) => {
  const dispatch = useDispatch();

  const toggleDone = () => dispatch(actions.toggleDone(ownProps.id));

  return <TodoItem {...ownProps} toggleDone={toggleDone} />;
};

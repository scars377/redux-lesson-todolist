import { ADD_TODO, TOGGLE_DONE } from './constants';

// text
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

// id
export const toggleDone = (payload) => ({
  type: TOGGLE_DONE,
  payload,
});

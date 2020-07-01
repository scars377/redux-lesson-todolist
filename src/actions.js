import { ADD_TODO, TOGGLE_DONE } from './constants';
import * as api from './api';
import { createAction } from 'redux-actions';

const _addTodo = createAction(ADD_TODO);

export const addTodo = (text) => async (dispatch) => {
  const item = await api.addTodo(text);
  dispatch(_addTodo(item));
};

export const toggleDone = createAction(TOGGLE_DONE);

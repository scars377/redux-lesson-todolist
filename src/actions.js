import { ADD_TODO, TOGGLE_DONE } from './constants';
import * as api from './api';

export const addTodo = (text) => async (dispatch) => {
  const item = await api.addTodo(text);
  dispatch({
    type: ADD_TODO,
    payload: item,
  });
};

export const toggleDone = (payload) => ({
  type: TOGGLE_DONE,
  payload,
});

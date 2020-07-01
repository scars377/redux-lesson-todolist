import { ADD_TODO, TOGGLE_DONE } from './constants';
import { handleActions } from 'redux-actions';

const INIT_STATE = {
  todoItems: [],
};

export default handleActions(
  {
    [ADD_TODO]: (state, action) => {
      const item = action.payload;
      return { todoItems: [...state.todoItems, item] };
    },

    [TOGGLE_DONE]: (state, action) => {
      const id = action.payload;
      return {
        todoItems: state.todoItems.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                done: !item.done,
              },
        ),
      };
    },
  },
  INIT_STATE,
);

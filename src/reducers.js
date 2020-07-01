import { ADD_TODO, TOGGLE_DONE } from './constants';

const INIT_STATE = {
  todoItems: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      const item = action.payload;
      return { todoItems: [...state.todoItems, item] };

    case TOGGLE_DONE:
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

    default:
      return state;
  }
};

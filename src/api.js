export const addTodo = (text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        text,
        done: false,
      });
    }, 1000);
  });

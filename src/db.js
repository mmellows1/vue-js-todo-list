const db = () => {
  return window.localStorage;
};

export const createTodo = () => {
  db().setItem();
};

export const updateTodo = (id, data) => {
  if (!getTodo(id)) {
    return;
  }

  const existingTodo = getTodo(id);
  db().setItem(id, { ...existingTodo, data });
};

export const deleteTodo = (id) => {
  if (!getTodo(id)) {
    return;
  }

  db().removeItem(id);
};

export const getTodo = (id) => {
  return db().getItem(id);
};

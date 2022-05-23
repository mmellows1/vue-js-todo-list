import { v4 } from "uuid";

const db = () => {
  return window.localStorage;
};

export const createTodo = (data) => {
  const todos = getTodos() || [];
  const todo = { id: v4(), ...data };
  todos.push(todo);

  db().setItem(`todos`, JSON.stringify(todos));
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

  const todos = getTodos();
  db().setItem("todos", JSON.stringify(todos.filter((task) => task.id !== id)));
};

export const getTodo = (id) => {
  const todos = getTodos();
  return todos.find((task) => task.id === id);
};

export const getTodos = () => {
  return JSON.parse(db().getItem("todos"));
};

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

  console.log(1, id, data);

  let existingTodos = getTodos();

  existingTodos.forEach((value, index) => {
    if (value.id == id) {
      existingTodos[index] = { ...value, ...data };
      console.log(2, existingTodos[index]);
    }
  });

  console.log(3, existingTodos);

  db().setItem("todos", JSON.stringify(existingTodos));
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

export const getTags = () => {
  console.log(JSON.parse(db().getItem("tags")));
  return JSON.parse(db().getItem("tags"));
};

export const getTag = (id) => {
  const tags = getTags();
  return tags.find((tag) => tag.id === id);
};

export const updateTag = (id, data) => {
  if (!getTag(id)) {
    return;
  }

  let existingTags = getTags();

  existingTags.forEach((value, index) => {
    if (value.id == id) {
      existingTags[index] = { ...value, ...data };
    }
  });

  db().setItem("tags", JSON.stringify(existingTags));
};

export const createTag = (data) => {
  const tags = getTags() || [];
  const tag = { id: v4(), ...data };
  tags.push(tag);
  console.log(tags);

  db().setItem(`tags`, JSON.stringify(tags));
};

export const deleteTag = (id) => {
  if (!getTag(id)) {
    return;
  }

  const tags = getTags();
  db().setItem("tags", JSON.stringify(tags.filter((task) => task.id !== id)));
};

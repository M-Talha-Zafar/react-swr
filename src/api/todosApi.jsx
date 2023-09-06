import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const todosUrlEndpoint = "/todos";

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const getTodos = async () => {
  const response = await todosApi.get(todosUrlEndpoint);
  return response.data;
};

export const addTodo = async ({ userId, title, completed }) => {
  await delay(1000);

  if (Math.random() < 0.5) throw new Error("Something went wrong");

  const response = await todosApi.post(todosUrlEndpoint, {
    userId,
    title,
    completed,
  });
  return response.data;
};

export const updateTodo = async (todo) => {
  await delay(1000);

  const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async ({ id }) => {
  await delay(1000);
  return await todosApi.delete(`${todosUrlEndpoint}/${id}`, id);
};

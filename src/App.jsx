import { preload } from "swr";
import TodoList from "./features/todos/TodoList";
import { getTodos, todosUrlEndpoint as cacheKey } from "./api/todosApi";

preload(cacheKey, getTodos);

function App() {
  return <TodoList />;
}

export default App;

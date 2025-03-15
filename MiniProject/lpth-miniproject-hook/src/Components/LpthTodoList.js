import { useEffect, useReducer } from "react";
import { todoReducer } from "../Reducers/LpthReducersToDo";
import LpthAddTodo from "./LpthAddTodo";
import LpthTodoItem from "./LpthTodoItem";

function LpthTodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h2>Danh Sách Công Việc</h2>
      <LpthAddTodo dispatch={dispatch} />
      <ul>
        {todos.map((todo) => (
          <LpthTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default LpthTodoList;

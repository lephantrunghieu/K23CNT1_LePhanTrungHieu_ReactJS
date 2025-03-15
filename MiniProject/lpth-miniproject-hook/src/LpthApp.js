import React from "react";
import { ThemeProvider } from "./Context/LpthContextTheme";
import LpthThemeToggle from "./Components/LpthThemeToggle";
import LpthTodoList from "./Components/LpthTodoList";
import LpthAddTodo from "./Components/LpthAddTodo";

function LpthApp() {
  return (
    <ThemeProvider>
      <div>
        <h1>Mini Project: Todo List</h1>
        <LpthThemeToggle />
        <LpthTodoList />
        <LpthAddTodo />
      </div>
    </ThemeProvider>
  );
}

export default LpthApp;

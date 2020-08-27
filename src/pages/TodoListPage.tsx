import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { ITodoItem } from "../interfaces";
import TodoList from "../components/TodoList";

const dummyTodoes: ITodoItem[] = new Array(5).fill("").map((e, index) => ({
  id: String(index),
  title: `Todo ${index}`,
  author: "John Doe",
  checked: false,
  created: new Date(),
}));

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState(dummyTodoes);

  return (
    <>
      <Navigation />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoListPage;

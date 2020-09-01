import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { ITodoItem } from "../interfaces";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const dummyTodoes: ITodoItem[] = new Array(5).fill("").map((e, index) => ({
  id: `${index}`,
  title: `Todo ${index}`,
  author: "John Doe",
  checked: false,
  created: new Date(),
}));

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState(dummyTodoes);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      {
        id: `${Date.now()}`,
        title,
        author: "John Doe",
        checked: false,
        created: new Date(),
      },
      ...prev,
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navigation />
      <TodoForm addHandler={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </>
  );
};

export default TodoListPage;

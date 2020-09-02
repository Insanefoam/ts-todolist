import React from "react";
import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const TodoListPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoListPage;

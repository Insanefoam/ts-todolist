import React from "react";
import TodoItem from "../TodoItem";
import ITodoItem from "../TodoItem/interfaces/ITodoItem";

const dummyTodoes: ITodoItem[] = new Array(5).fill("").map((e, index) => ({
  id: String(index),
  title: `Todo ${index}`,
  author: "John Doe",
  checked: false,
  created: new Date(),
}));

const TodoList = () => (
  <ul className="list-group center">
    {dummyTodoes.map((todo) => (
      <TodoItem {...todo} key={todo.id} />
    ))}
  </ul>
);

export default TodoList;

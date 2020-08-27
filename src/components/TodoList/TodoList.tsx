import React from "react";
import TodoItem from "../TodoItem";
import { ITodoItem } from "../../interfaces";

type TodoListProps = {
  todos: ITodoItem[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul className="list-group p-5 mb3">
    {todos.map((todo) => (
      <TodoItem {...todo} key={todo.id} />
    ))}
  </ul>
);

export default TodoList;

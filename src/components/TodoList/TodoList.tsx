import React from "react";
import TodoItem from "../TodoItem";
import { ITodoItem } from "../../interfaces";

type TodoListProps = {
  todos: ITodoItem[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul className="list-group pl-5 pr-5 mt-3">
    {todos.map((todo) => (
      <TodoItem {...todo} key={todo.id} />
    ))}
  </ul>
);

export default TodoList;

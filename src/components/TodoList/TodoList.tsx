import React from "react";
import TodoItem from "../TodoItem";
import { ITodoItem } from "../../interfaces";

type TodoListProps = {
  todos: ITodoItem[];
  removeTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => (
  <ul className="list-group pl-5 pr-5 mt-3">
    {todos.map((todo) => (
      <TodoItem
        {...todo}
        key={todo.id}
        handlePress={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;

import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodos } from "../store/selectors/todos.selector";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul className="list-group pl-5 pr-5 mt-3">
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;

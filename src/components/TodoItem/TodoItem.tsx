import React from "react";
import { TodoItemProps } from "./interfaces/TodoItemProps";

const TodoItem = ({ title, author, created }: TodoItemProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>Created by: {author}</div>
      <div>{created?.toLocaleDateString()}</div>
    </div>
  );
};

export default TodoItem;

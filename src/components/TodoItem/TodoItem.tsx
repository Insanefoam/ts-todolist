import React from "react";
import { TodoItemProps } from "./interfaces/TodoItemProps";

const TodoItem = ({ title, author, created }: TodoItemProps) => (
  <li className="list-group-item">
    <div>{title}</div>
    <div>{`Created by: ${author}`}</div>
    <div>{created?.toLocaleDateString()}</div>
  </li>
);

export default TodoItem;

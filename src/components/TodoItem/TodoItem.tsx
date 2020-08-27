import React from "react";

interface TodoItemProps {
  title: string;
  author: string;
  created?: Date;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, author, created }) => (
  <li className="list-group-item">
    <div>{title}</div>
    <div>{`Created by: ${author}`}</div>
    <div>{created?.toLocaleDateString()}</div>
  </li>
);

export default TodoItem;

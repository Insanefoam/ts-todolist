import React from "react";

interface TodoItemProps {
  title: string;
  author: string;
  created?: Date;
  handlePress: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  author,
  created,
  handlePress,
}) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <div>{title}</div>
      <div>{`Created by: ${author}`}</div>
      <div>{created?.toLocaleDateString()}</div>
    </div>
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handlePress}
      >
        Delete
      </button>
    </div>
  </li>
);

export default TodoItem;

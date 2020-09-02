import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/actions/todos.actions";

interface TodoItemProps {
  id: string;
  title: string;
  author: string;
  created?: Date;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, author, created }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(removeTodo(id));
  };

  return (
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
};

export default TodoItem;

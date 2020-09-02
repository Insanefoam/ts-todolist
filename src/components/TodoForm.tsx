import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo as addTodoStore } from "../store/actions/todos.actions";

interface TodoFormProps {}

const TodoForm: React.FC<TodoFormProps> = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addTodo = (title: string) => {
    dispatch(addTodoStore(title));
    setValue("");
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo(value);
    }
  };

  const handlePress = (_: React.MouseEvent<HTMLButtonElement>) => {
    addTodo(value);
  };

  return (
    <div className="input-group mt-3 pl-5 pr-5">
      <input
        type="text"
        className="form-control"
        placeholder="Type new todo text..."
        value={value}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handlePress}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;

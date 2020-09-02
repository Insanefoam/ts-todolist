import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todos.actions";

interface TodoFormProps {}

const TodoForm: React.FC<TodoFormProps> = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addTodoHandler = (title: string) => {
    dispatch(addTodo(title));
    setValue("");
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodoHandler(value);
    }
  };

  const handlePress = (_: React.MouseEvent<HTMLButtonElement>) => {
    addTodoHandler(value);
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

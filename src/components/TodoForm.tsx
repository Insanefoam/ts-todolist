import React, { useState } from "react";

interface TodoFormProps {
  addHandler(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addHandler }) => {
  const [value, setValue] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addHandler(value);
      setValue("");
    }
  };

  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    addHandler(value);
    setValue("");
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

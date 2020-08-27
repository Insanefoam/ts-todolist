import React, { useState, ChangeEvent } from "react";

const TodoForm: React.FC = () => {
  const [value, setValue] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") alert("enter");
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
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
    </div>
  );
};

export default TodoForm;

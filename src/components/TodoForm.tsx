import React from "react";

const TodoForm: React.FC = () => {
  return (
    <div className="input-group mt-3 pl-5 pr-5">
      <input
        type="text"
        className="form-control"
        placeholder="Type new todo text..."
        aria-label="Type new todo text..."
        aria-describedby="button-addon2"
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

import { TodoAction } from "../constants/todos.constants";
import { ITodoItem } from "../../interfaces";
import { TodosState } from "../types/todos.types";

const initialState: TodosState = [];

export const todoReducer = (
  state: TodosState = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: ITodoItem = {
        id: `${Date.now()}`,
        title: action.payload.title,
        author: "John Doe",
        checked: false,
        created: new Date(),
      };
      return [newTodo, ...state];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case "UPDATE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    }
    default:
      return state;
  }
};

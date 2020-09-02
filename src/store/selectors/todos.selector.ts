import { ITodoItem } from "../../interfaces";
import { RootState } from "../reducers";

export const selectTodos = (state: RootState): ITodoItem[] => {
  return state.todos;
};

export const selectTodoById = (
  state: RootState,
  id: string
): ITodoItem | undefined => {
  return state.todos.find((todo) => todo.id === id);
};

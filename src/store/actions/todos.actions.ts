import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TodoAction,
} from "../constants/todos.constants";

export const addTodo = (title: string): TodoAction => ({
  type: ADD_TODO,
  payload: { title },
});

export const removeTodo = (id: string): TodoAction => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const updateTodo = (id: string, title: string): TodoAction => ({
  type: UPDATE_TODO,
  payload: { id, title },
});

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: { title: string };
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: { id: string };
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  payload: { id: string; title: string };
}

export type TodoAction = AddTodoAction | RemoveTodoAction | UpdateTodoAction;

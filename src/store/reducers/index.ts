import { combineReducers } from "redux";
import { todoReducer } from "./todosReducer";

export const rootReducer = combineReducers({ todos: todoReducer });

export type RootState = ReturnType<typeof rootReducer>;

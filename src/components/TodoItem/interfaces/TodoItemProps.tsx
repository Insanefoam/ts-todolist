import { string } from "prop-types";

export interface TodoItemProps {
  title: string;
  author: string;
  created?: Date;
}

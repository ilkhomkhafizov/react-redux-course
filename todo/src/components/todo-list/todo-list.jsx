import React from "react";
import TodoListItem from "./../todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id}>
            <TodoListItem {...itemProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

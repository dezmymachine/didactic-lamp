import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.description}</span>
    </li>
  );
};

export default TodoItem;

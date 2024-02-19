import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        description,
        completed: false,
      };
      addTodo(newTodo);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

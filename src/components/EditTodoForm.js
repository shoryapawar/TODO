import React, { useState } from "react";

export const EditTodoForm = ({ editTodo,task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value){
      editTodo(value,task.id);
     setValue('');
    }
  };
  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="update task"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  );
};

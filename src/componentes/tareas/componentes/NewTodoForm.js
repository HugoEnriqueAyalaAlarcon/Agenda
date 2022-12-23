import React, { useState, useReducer } from "react";
import { v4 as uuid} from "uuid"
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (userInput.task === "") return; //si input add esta vacio no hacer nada
      const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">Nueva tarea</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="Nueva tarea"
      />
      <button className="btn-tareas">Añadir Tarea</button>
    </form>
  );
}

export default NewTodoForm;

import React, { useState } from "react"; //libreria para manejar estados
import "./componentes/TodoList.css"; //hola de estilo
import Todo from "./componentes/Todo"; // llamamos a componente 
import NewTodoForm from "./componentes/NewTodoForm"; // llamamos a componente 

function Tareas() {
  const [todos, setTodos] = useState([ //estados

  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className='container d-flex justify-content-center mt-5'>
      <div className="TodoList rounded-3 sombra w-100">
        <h1>
          Tareas <span>Lista de tareas</span>
        </h1>
        <ul>{todosList}</ul>
        <NewTodoForm createTodo={create} />
      </div>
    </div>
  );
}

export default Tareas; //esportar funcion taresas
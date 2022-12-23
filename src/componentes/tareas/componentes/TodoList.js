import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./componentes/NewTodoForm";
import { v4 as uuid} from "uuid"
import "./TodoList.css";

const KEY = 'todoApp.todos'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "task 1", completed: false },
    { id: uuid(), task: "task 2", completed: true }
  ]);

  useEffect(() => { //salvar estado cuando recargamos
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos){ //si ya hay algo en local storan
      setTodos (storedTodos);
    }
  },[]);

  useEffect(() => { //salvar estado en el storan
    localStorage.setItem( KEY , JSON.stringify(todos))
  },[todos]);

  
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
    <div className='container d-flex justify-content-center mt-5 '>
      <div className="TodoList rounded-3 shadow">
        <h1>
          Lista de Tareas <span>tareas;</span>
        </h1>
        <ul>{todosList}</ul>
        <NewTodoForm createTodo={create} />
      </div>
    </div>
  );
}

export default TodoList;

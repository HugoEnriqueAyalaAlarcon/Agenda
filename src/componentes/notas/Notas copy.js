
import React, { useState, useRef , useEffect } from 'react';
import { ListGroup, Button, } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './componentes/Notas.css';
import { TodoList } from './componentes/TodoList';

const KEY = 'todoApp.todos'
let itemsText;

export default function Notas() {
const [Nota, setNota] = useState(() => [
  {id: uuid , notaTxt: "nota1"}
]);

<ButtonCloce className="remove-btn" //Boton tache
variant="danger"
size="sm"
onClick={() =>   setNota((Nota) => Nota.filter((Nota) => Nota.id !== id)) }//Borrar nota
  >X
</ButtonCloce>

const todoNotaRef = useRef(); // escuchar corecta el input

const handleTodoAdd = () => {
  const notaTxt = todoNotaRef.current.value;//lee input
  if(notaTxt === '')return; // si esta en blanco no hace nada

  setNota( (preNotas) =>{ //renderisar nueva nota
    return [...preNotas ,{id: uuid () , notaTxt} ]
  });

  todoNotaRef.current.value = null;
}


  return (
  <div className='container d-flex justify-content-center mt-5 '>
    <div className='d-flex flex-column justify-content-center p-1  border border-secundary rounded-3 shadow w-100'>

      <input ref={todoNotaRef} type="text" placeholder='Nueva Nota' />
      <boton className= "Boton-notas"
      onClick={handleTodoAdd}  //añadir nueva nota
      > 
      Añadir Nota</boton>
      <TodoList todos={Nota} >  {/*items de las notas*/}
      </TodoList>
    </div>
  </div>
  );
}

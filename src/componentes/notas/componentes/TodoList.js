import React from 'react'
import { ListGroup, Button, } from 'react-bootstrap';
import { Todoitems } from './TodoItems';

export  function TodoList({todos}) {

  return (
    <div >
        {todos.map ((todo) => (
        <div className="Notas-hoja">
          <ListGroup.Item >
            <ButtonCloce/>

            <Todoitems todo = {todo} />
          </ListGroup.Item>

        </div>
    ))}
    </div>
  )
}

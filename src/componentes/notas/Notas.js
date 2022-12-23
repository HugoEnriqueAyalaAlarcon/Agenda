
import React, { useState , useEffect } from 'react';
import { ListGroup, Button, } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './componentes/Notas.css';

const KEY = 'todoApp.todos'

export default function Notas() {
const [items, setItems] = useState(() => []);


  return (
  <div className='container d-flex justify-content-center mt-5 '>
    <div className='d-flex flex-column justify-content-center p-1 rounded-3 sombra w-100'>

      <button className='my-3 w-50 m-auto Boton-notas'    //Boton para añadir notas
      onClick={() => {const text = prompt('Nota;');// captura en text 
        if (text) {
        setItems((items) => [
          ...items,
          {
            id: uuid(),
            text
          }
          ]);
        }
      }}>
      Añadir Nota
      </button>

      <div className="todo-list"> {/*Lista de notas */} 
        {items.map(({ id, text, nodeRef }) => (
          <div className='Notas-hoja'>
              <ListGroup.Item >
                <Button className="remove-btn" //Boton tache
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        setItems((items) =>
                        items.filter((item) => item.id !== id)
                        )}>
                    &times;
                </Button>
                <div className='text-nota'>
                  {text}
                </div>
              </ListGroup.Item>

            
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

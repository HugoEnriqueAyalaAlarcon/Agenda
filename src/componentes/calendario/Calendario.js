import React from 'react';
import DatePicker from 'sassy-datepicker'; //bilblioteca para el calendario
import './calendario.css';  //css de calendario en formato min

export default function Calendario() {
  const onChange=(date) =>{   //funcion que odtiene la fecha
    console.log(date.toString()); //imprime la fecha
  };
  return (
    <div className='container d-flex justify-content-center mt-5 w-100'>
      <DatePicker onChange={onChange} className="sombra w-100" />
    </div>

  );
}

import React from "react";
import {ImAddressBook} from  'react-icons/im';
import {ImHome} from  'react-icons/im';
import {ImCalculator} from  'react-icons/im';
import {ImCalendar} from  'react-icons/im';
import {BiTask} from  'react-icons/bi';
import {FaStickyNote} from  'react-icons/fa';
import "./NavBar.css"



// This is a React Router v6 app
import {
  Link,
} from "react-router-dom";


function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand fs-3" to="/"><ImAddressBook class="icon-agenda"/>Mi Agenda</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-
                    expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/"><ImHome class="icon-navbar"/>Inicio</Link>
                        <Link class="nav-link active" to="/Calculadora"><ImCalculator class="icon-navbar"/>Caculadora</Link>
                        <Link class="nav-link active" to="/Notas"><FaStickyNote class="icon-navbar"/>Notas</Link>
                        <Link class="nav-link active" to="/Tareas"><BiTask class="icon-navbar"/>Tareas</Link>
                        <Link class="nav-link active" to="/Calendario"><ImCalendar class="icon-navbar"/>Calendario</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
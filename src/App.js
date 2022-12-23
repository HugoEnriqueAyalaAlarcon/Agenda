//importar componentes
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/inicio/Inicio";
import Calculadora from "./componentes/calculadora/Calculadora";
import Notas from "./componentes/notas/Notas";
import Tareas from "./componentes/tareas/Tareas";
import Calendario from "./componentes/calendario/Calendario";
import "./App.css" //css temas
// React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect , useState } from "react";


function App() {
  /**
   * Determina si el checkbox debería estar checkeado basado en
   * el contenido del localStorage
   */
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  /**
   * Cada vez que el estado checked cambie, actualiza la propiedad
   * data-theme en el HTML para que use el tema que estamos almacenando
   * en el localStorage
   */
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  /**
   * Actualiza el estado checked y el contenido de nuestro objeto
   * theme en el localStorage basados en el checkbox
   */
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="App-header"> {/*fondo y temas*/}
      <BrowserRouter>
        <NavBar />
        {/*boton para cambiar tema*/}
        <div id="btn-themes">
            <input
              type="checkbox"
              id="btn-switch"
              defaultChecked={checked}
              onChange={() => toggleThemeChange()}
            />
            <label for="btn-switch" className="lbl-switch"></label>
        </div>

        {/*boton para cambiar tema*/}
        <div className="boder boder-info w-50 m-auto">
          <Routes>
            <Route path="/" element={<Inicio />} />   
            <Route path="/Calculadora" element={<Calculadora />} />   
            <Route path="/Notas" element={<Notas />} />   
            <Route path="/Tareas" element={<Tareas />} />   
            <Route path="/Calendario" element={<Calendario />} />   
          </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;

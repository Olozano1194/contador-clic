import './App.css';
import  freeCodeCampLogo  from "./imagenes/freecodecamp-logo.png";
import  Boton  from "./componentes/boton";
import Contador from "./componentes/contador";

import { useState } from "react";

function App() {
  const [numClic, setNumClic] = useState(0);
  
  // useEffect(() => {
  //   setNumClic(0)
  // }, []);

  const manejarClic = () => {
    //console.log("clic");

    setNumClic(numClic + 1);

    }
        
  

  const reiniciarContador = () => {
    //console.log("reiniciar");
    setNumClic(0);


    }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      
      <div className='contenedor-principal'>
        <Contador
          numClic={numClic}

        />

        <Boton 
          texto= 'clic'
          esBotonDeClic={true}
          manejarclic={manejarClic} 
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarclic={reiniciarContador}

        />

      </div>
    </div>
  );
}

export default App;

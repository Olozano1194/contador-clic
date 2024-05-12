import React from "react";
import '../style/Boton.css';

function Boton({ texto, esBotonDeClic, manejarclic }) {
    return (
        <button 
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarclic}>
                {texto}
        </button>

    );
}


export default Boton;
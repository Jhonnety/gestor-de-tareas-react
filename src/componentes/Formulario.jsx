import React, {useState} from "react";
import '../hojas-de-estilo/Formulario.css'
import { v4 as  uuidv4} from 'uuid';

function Formulario(props){

    const [input, setInput] = useState('');

   

    const manejarCambio = e => {
           setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault(); //Para que no se vuelva a cargar la pagina al enviar el formulario
            const tareaNueva = {
                id:uuidv4(),
                texto: input,
                completada:false
            }
        props.onSubmit(tareaNueva); // cuando se envie el formulario
    }
    
    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio} >
            <input
            className="tarea-input"
            type='texto'
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
}
export default Formulario;
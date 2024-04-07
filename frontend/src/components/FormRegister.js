import React from "react";
import '../stylesheet/FormRegister.css';

function FormRegister(){
    return ( 
        <div className="contenedor-formularioregistroactividades">
            <h2>Registro de Actividades</h2>
            <form>
                <div>
                    <label htmlFor="actividad">Actividad:</label>
                    <input
                    type="text"
                    id="actividad"
                    value=""
                    required
                    />
                </div>
                <div>
                    <label htmlFor="proyecto">Proyecto:</label>
                    <input
                    type="text"
                    id="proyecto"
                    value=""
                    required
                    />
                </div>
                <div>
                    <label htmlFor="usuario">Usuario Responsable:</label>
                    <input
                    type="text"
                    id="usuario"
                    value=""
                    required
                    />
                </div>
                <div>
                    <label htmlFor="tiempo">Tiempo:</label>
                    <input
                    type="number"
                    id="tiempo"
                    value=""
                    required
                    />
                </div>
                <button type="submit">Registrar Actividad</button>
            </form>
    </div>
    );
}

export default FormRegister;
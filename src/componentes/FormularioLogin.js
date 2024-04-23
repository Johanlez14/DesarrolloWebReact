import React from "react";
import '../stylesheet/FormularioLogin.css';

function FormularioLogin(){
    return ( 
        <div className="contenedor-formulariologin">
            <h2>Iniciar Sesión</h2>
            <form >
                <div>
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    value=""
                />
                </div>
                <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value=""
                />
                </div>
                <button type="submit">Iniciar</button>
            </form>
        </div>
    );
}

export default FormularioLogin;
import React from "react";
import '../stylesheet/DataForm.css';

function DataForm(){
    const actividades = [
      { actividad: "Desarrollo de frontend", proyecto: "Proyecto página web", usuario: "Julian", tiempo: 120 },
      { actividad: "Reunión de equipo", proyecto: "Proyecto Bogotá", usuario: "Johan ", tiempo: 60 },
      { actividad: "Pruebas de integración", proyecto: "Proyecto Sol ", usuario: "Pedro ", tiempo: 90 }
    ];

    return ( 
        <div className="contenedor-datosactividades">
            <h2>Tabla de Actividades</h2>
            <table>
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Proyecto</th>
                        <th>Usuario Responsable</th>
                        <th>Tiempo Minutos</th>
                    </tr>
                </thead>
                <tbody>
                    {actividades.map((actividad, index) => (
                        <tr key={index}>
                            <td>{actividad.actividad}</td>
                            <td>{actividad.proyecto}</td>
                            <td>{actividad.usuario}</td>
                            <td>{actividad.tiempo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataForm;

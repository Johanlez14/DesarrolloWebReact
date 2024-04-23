import mysql from 'mysql'

let conexion = mysql.createConnection({
    host:'crm.cluster-ceoabngeeefi.us-east-1.rds.amazonaws.com',
    database: 'proyectoReact',
    user: 'master',
    password: 'Nueve+Cinco=14'
})

conexion.connect((err) => {
    if(err){
        console.log("Error al conectarse a la DB " + err);
    }
    else {
        console.log("Exito en la conexión");
    }
})
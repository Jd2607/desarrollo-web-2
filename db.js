const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123', 
    database: 'activad_10',
    supportBigNumbers: true,  
    bigNumberStrings: true,   
});

connection.connect((err) => {
    if (err) {
        console.error('Error en la conexion a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;

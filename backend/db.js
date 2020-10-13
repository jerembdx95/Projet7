  
const mysql = require("mysql");

const connection = mysql.createConnection ({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "groupomania",
    insecureAuth : true
  });
  connection.connect ((err) => {
    if (err) throw err;
    console.log ('Connecté à la base de données!');
  });

  module.exports = connection;
const mysql = require('mysql2');
const connectionstring = 'mysql://bankuser:bankpass@localhost/bank';
const connection = mysql.createPool(connectionstring);
module.exports = connection;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.56.1',
  user     : 'root',
  password : 'sharemede!',
  port     : 3307,
  database : 'test2'
});

connection.connect();

connection.query('SELECT * from logintest', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();
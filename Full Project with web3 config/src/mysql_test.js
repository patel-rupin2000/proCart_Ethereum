
import mysql from 'mysql';


var connection = createConnection({
host: "localhost",
user: "root",
password: "Rrp@21122000"
});

connection.connect(function(err) {
if (err) {
console.error('error connecting: ' + err.stack);
return;
}

console.log('connected as id ' + connection.threadId);
});

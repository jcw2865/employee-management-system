var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "test_user",
    password: "password",
    database: "employee_management_db"
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("Connected as ID " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM employees_table", function (err, res) {
        if (err) throw (err);
        console.log(res);
        connection.end();
        console.log("Connection ended. ");
    });
};
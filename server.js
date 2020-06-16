const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const mysql = require("mysql");
// const sequelize = require("sequelize");
const routes = require("./routes")
// const db = require("./models")

const PORT = process.env.PORT || 3001;

// |||||||||||||||||||||||||
// Begin MySQL Connection
// |||||||||||||||||||||||||
// Necessary connection info
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "test_user",
  password: "password",
  database: "employee_management_db"
});

// Calling the function to create the MySQL connection.
connection.connect(function (err) {
  if (err) throw (err);
  console.log("Connected to MySQL as ID " + connection.threadId);
  // afterConnection();
});

// Creating the function to end the MySQL connection.
function afterConnection() {
  connection.end();
  if (err) throw (err);
}

// |||||||||||||||||||||||||
// Middleware
// |||||||||||||||||||||||||

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(morgan("dev"));

// Add routes, both API and view
app.use("/api", routes);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

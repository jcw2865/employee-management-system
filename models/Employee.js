const Sequelize = require("sequelize");
// Not sure about the line below.
// const sequelize = require("../scripts/seedDB");

const sequelize = new Sequelize("sequelize_chirpy", "test_user", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const Employee = sequelize.define("employee", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    // department_id: Sequelize.INT,
    // job_id: Sequelize.INT,
    // supervisor: Sequelize.BOOLEAN
});

// Syncs with DB
Employee.sync();

module.exports = Employee;
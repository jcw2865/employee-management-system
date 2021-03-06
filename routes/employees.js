const router = require("express").Router();
const employeeController = require("../controllers/employeeController");

// Matches with "/api/employees"
router
    .route("/")
    .get(employeeController.findAll)
    .post(employeeController.create);

module.exports = router;
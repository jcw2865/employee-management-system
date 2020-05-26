const router = require("express").Router();
const employeeController = require("../controllers/employeeController");

// Matches with "/api/employees"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

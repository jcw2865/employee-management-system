const router = require("express").Router();
const employeeRoutes = require("./employeeRoutes");

// For any URL with "/employees", use the employeeRoutes JS file.
router.use("/employees", employeeRoutes);

module.exports = router;

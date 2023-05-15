const express = require("express");
const {
  fetchAllEmployees,
  createEmployee,
  fetchEmloyeeByType,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
  
} = require("../controllers/EmployeeController");

const router = express.Router();

router.get("/employees", fetchAllEmployees);
router.post("/employees", createEmployee);
router.get("/employees/:category", fetchEmloyeeByType);
router.put("/employees/:eid", updateEmployee);
router.delete("/employees/:eid", deleteEmployee);
router.get("/employee/:eid", getSingleEmployee);


module.exports = router;

const Employee = require("../models/EmoployeeModel");


const fetchAllEmployees = (req, res) => {
    Employee.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ employees: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const fetchEmloyeeByType = (req, res) => {
    Employee.find({ emptype: req.params.emptype }, (err, docs) => {
    if (!err) {
      res.status(200).json({ employees: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const createEmployee = (req, res) => {
    Employee.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const deleteEmployee = (req, res) => {
  Employee.deleteOne({ _id: req.params.eid }, (err) => {
    if (err) res.status(500).json({ error: err });

    res.status(204).json({ status: "Employee deleted!" });
  });
};

const updateEmployee = async (req, res) => {
  const eid = req.params.eid;

  try {
    let employee = await Employee.findById(eid);

    if (!employee) {
      return res.status(404).json({ updated: "Employee not found" });
    }

    employee = await employee.findByIdAndUpdate(eid, req.body);
    res.status(201).json({ updated: "Employee updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleEmployee = (req, res) => {
  console.log(req.params.eid);
  Employee.findById(req.params.eid, (err, data) => {
    if (err) return res.status(401).json({ employee: "not found" });

    res.status(200).json({ employee: data });
  });
};



module.exports = {
    fetchAllEmployees,
    fetchEmloyeeByType,
    createEmployee,
    deleteEmployee,
    getSingleEmployee,
    updateEmployee,
};

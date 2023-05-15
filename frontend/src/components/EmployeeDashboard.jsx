import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Employee.css";
import sorticon from "./img/sort-up.svg";


const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [EmSearch , setemSearch] = useState("");
  const [order, setOrder] = useState("ASC");

  

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Employee/employees`).then((res) => {
      setEmployees(res.data.employees);
    });
  }, []);

  const deleteEmployee = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Employee!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/Employee/employees/${id}`)
          .then(() => {
            swal("Employee Deleted Successfully!", {
              icon: "success",
            });

            axios
              .get(`http://localhost:8000/api/Employee/employees`)
              .then((res) => {
                setEmployees(res.data.employees);
              });
          });
      }
    });
  };

  //add sorting algorithm
  const sorting =(col)=>{
    if(order === "ASC"){
      const sorted = [...employees].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder("DSC")
    }


    if(order === "DSC"){
      const sorted = [...employees].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder("ASC")
    }
  }


  return (
    <>
      <div className="store-container d-flex justify-content-center p-5">
        <div className=" w-100" id="store-admin-admin456412123">
          <h1> People </h1>
          <hr/>
          <div className="d-flex">
            <Link to="/employee/add-employee">
              <button class="btn btn-primary">
                <i class="fa-solid fa-plus mx-2"></i> Add Employee to System
              </button>
            </Link>
          
          <div class="form-row" style={{width:"400px", marginLeft:"30px"}}>
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control"  onChange={e=>setemSearch(e.target.value)}>
        <option selected>Employee Type</option>
        <option>Full Time</option>
        <option>Part Time</option>
      </select>
    </div>
    </div>
  
          </div>
        

          <table
            class="table table-bordered"
          >
            <thead>
              <tr>
                <th scope="col" onClick={()=>sorting("dispName")}>Display Name <img src={sorticon} onClick={()=>sorting("designation")}/></th>
                <th scope="col" >Emp ID</th>
                <th scope="col" onClick={()=>sorting("designation")}>Designation <img src={sorticon} onClick={()=>sorting("designation")}/></th>
                <th scope="col" onClick={()=>sorting("empType")}>Emp. Type <img src={sorticon} onClick={()=>sorting("designation")}/></th>
                <th scope="col" onClick={()=>sorting("experience")}>Experience <img src={sorticon} onClick={()=>sorting("designation")}/></th>
                <th scope="col" >Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.filter(value=>{
                  if(EmSearch ===""){
                    return value;
                  }
                  else if(
                    value.empType.toLowerCase().includes(EmSearch.toLowerCase())
                  ){
                    return value;
                  }
                }).map((emp) => (
                  <tr>
                    <th scope="row" style={{ width: "300px" }}>
                      {emp.dispName}
                    </th>
                    <td>
                      {emp._id}
                    </td>
                    <td>{emp.designation}</td>
                    <td>{emp.empType}</td>
                    <td>{emp.experience}</td>
                    <td style={{ width: "300px" }}>
                      <Link to={`/employee/edit/${emp._id}`}>
                        <button
                          type="button"
                          class="btn btn-outline-warning mx-2"
                        >
                          Edit <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteEmployee(emp._id)}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        Delete <i class="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;

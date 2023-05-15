import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const AddEmployee = () => {
    const [gender, setGender] = useState("Something else here");
    const [fullname, setFullname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [salary, setSalary] = useState("");
    const [phone, setphone] = useState("");
    const [personlnote, setPersonlNote] = useState("");
    const [dispName, setDispName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [empType, setEmpType] = useState("Something else here");
    const [experience, setExperience] = useState("Something else here");
    const [errors, setErrors] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

  const saveEmployee = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    const employee = {
        gender,
        fullname,
        name,
        email,
        designation,
        joinedDate,
        salary,
        phone,
        personlnote,
        dispName,
        dateOfBirth,
        empType,
        experience,
    };

    if (
      employee.gender.length <= 0 ||
      employee.fullname.length <= 0 ||
      employee.name.length <= 0 ||
      employee.email.length <= 0 ||
      employee.designation.length <= 0 ||
      employee.joinedDate.length <= 0 ||
      employee.salary.length <= 0 ||
      employee.phone.length <= 0 ||
      employee.phone.length > 10 ||
      employee.personlnote.length <= 0 ||
      employee.dispName.length <= 0 ||
      employee.dateOfBirth.length <= 0 ||
      employee.empType.length <= 0 ||
      employee.experience.length <= 0
    ) {
      setErrors(true);
      return;
    }

   

    axios
      .post(`${process.env.REACT_APP_API}/employees`, employee)
      .then((response) => {
        swal({
          title: "Employee Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate("/");
        });
      });
  };

  //form validation

  const validate = () => {
    const errors = {};
    
    if (!fullname) {
      errors.fullname = "full name is required!";
    }
    if (!name) {
      errors.name = "name is required!";
    }
    if (!email) {
      errors.email = "email is required!";
    }
    if (!salary) {
      errors.salary = "salary is required!";
    }
    if (!phone) {
      errors.phone = "phone is required!";
    }
    if (phone.length > 10 || phone.length < 10) {
      errors.phone = "invalid phone number";
    }
    if (!isValidEmail(email)) {
       errors.email = "invalid email"
    }
    
    return errors;
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> Add Employee to System </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter the details of the new Employee
        </small>



        <div className="store-add-product-form-inner  py-4">
        <form>
        <div class="form-group">
    <label for="inputAddress">Full Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Full Name"
    value={fullname}
    onChange={(e) => {
      setFullname(e.target.value);
    }}/>
     <p class="text-danger">{formErrors.fullname}</p>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name with Initials</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name with Initials"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}/>
       <p class="text-danger">{formErrors.name}</p>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Preffered / Display Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Display Name"
       value={dispName}
       onChange={(e) => {
         setDispName(e.target.value);
       }}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputState">Gender</label>
      <select id="inputState" class="form-control" value={gender} onChange={e=>setGender(e.target.value)}>
        <option selected>Choose...</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Date Of Birth</label>
      <input type="date" class="form-control" id="inputPassword4" placeholder="DOB"
       value={dateOfBirth}
       onChange={(e) => {
         setdateOfBirth(e.target.value);
       }}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
       value={email}
       onChange={(e) => {
         setEmail(e.target.value);
       }}/>
        <p class="text-danger">{formErrors.email}</p>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Mobile Number</label>
      <input type="number" class="form-control" id="inputPassword4" placeholder="Mobile"
       value={phone}
       onChange={(e) => {
         setphone(e.target.value);
       }}/>
        <p class="text-danger">{formErrors.phone}</p>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Designation</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Designation"
       value={designation}
       onChange={(e) => {
         setDesignation(e.target.value);
       }}/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputState">Employee Type</label>
      <select id="inputState" class="form-control" value={empType} onChange={e=>setEmpType(e.target.value)}>
        <option selected>Choose...</option>
        <option>Full time</option>
        <option>Part time</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Joined Date</label>
      <input type="date" class="form-control" id="inputEmail4" placeholder="Joined Date"
       value={joinedDate}
       onChange={(e) => {
         setJoinedDate(e.target.value);
       }}/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputState">Experience</label>
      <select id="inputState" class="form-control" value={experience} onChange={e=>setExperience(e.target.value)}>
        <option selected>Choose...</option>
        <option>01 Years</option>
        <option>02 Years</option>
        <option>03 Years</option>
        <option>04 Years</option>
        <option>05 Years</option>
        <option>06 Years</option>
      </select>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
  <label for="inputEmail4">Salary</label>
      <input type="number" class="form-control" id="inputEmail4" placeholder="Name with Initials"
      value={salary}
      onChange={(e) => {
        setSalary(e.target.value);
      }}/>
    </div>
    
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Personal Notes</label>
    <input class="form-control" id="exampleFormControlTextarea1" style={{height:"80px"}} value={personlnote}
      onChange={(e) => {
        setPersonlNote(e.target.value);
      }}/>
  </div>
  <div class="form-group">
    
  </div>
  <div style={{float:"right"}}>
  <Link to="/" type="submit" class="btn btn-danger">Cancel</Link>
  <button type="submit" class="btn btn-primary" style={{marginLeft:"20px"}} onClick={saveEmployee}>Add People</button>
  
  </div>
</form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

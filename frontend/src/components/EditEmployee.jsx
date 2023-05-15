import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const EditEmployee = () => {
    const [gender, setGender] = useState("");
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
    const [empType, setEmpType] = useState("");
    const [experience, setExperience] = useState("");
    const navigate = useNavigate();

  const { eid } = useParams();

  const saveEmployee = async (e) => {
    e.preventDefault();
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

    axios
      .put(`${process.env.REACT_APP_API}/employees/${eid}`, employee)
      .then((response) => {
        swal({
          title: "Employee Details Updated Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate("/");
        });
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/employee/${eid}`).then((res) => {
        setGender(res.data.employee.gender);
        setFullname(res.data.employee.fullname);
        setName(res.data.employee.name);
        setEmail(res.data.employee.email);
        setDesignation(res.data.employee.designation);
        setJoinedDate(res.data.employee.joinedDate);
        setSalary(res.data.employee.salary);
        setphone(res.data.employee.phone);
        setPersonlNote(res.data.employee.personlnote);
        setDispName(res.data.employee.dispName);
        setdateOfBirth(res.data.employee.dateOfBirth);
        setEmpType(res.data.employee.empType);
        setExperience(res.data.employee.experience);
     
    });
  }, [eid]);

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className="store-admin-edit-form p-4">
        <h2 className="display-6"> Edit Employee on System </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter thenew details that you need to edit
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
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name with Initials</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name with Initials"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}/>
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
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Mobile Number</label>
      <input type="number" class="form-control" id="inputPassword4" placeholder="Mobile"
       value={phone}
       onChange={(e) => {
         setphone(e.target.value);
       }}/>
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
      <input type="email" class="form-control" id="inputEmail4" placeholder="Name with Initials"
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

export default EditEmployee;

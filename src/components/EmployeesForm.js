import React, { useState } from 'react'

function EmployeesForm() {

    let [employees,setEmployees] = useState([]);

let getEmployeesFromServer = async()=>{
    let reqOption = {
        method:"GET"
    }

    let JSONData = await fetch("http://localhost:2222/employees", reqOption);
    let JSODATA = await JSONData.json();
    setEmployees(JSODATA);

    console.log(JSODATA);
};

  return (
    <div>
  <form>
<button type="button" onClick={()=>{
    getEmployeesFromServer()
}}
>
    Get Employees
    </button>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>ID</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((ele,i)=>{
     return(
     <tr key={i}>
          <td>{i+1}</td>
          <td>{ele.id}</td>
          <td>
            <img src={ele.profilePic}></img>
            </td>
          <td>{ele.firstName}</td>
          <td>{ele.lastName}</td>
          <td>{ele.gender}</td>
          <td>{ele.age}</td>
          <td>{ele.email}</td>
          <td>{ele.salary}</td>
          <td>{ele.department}</td>
          <td>{ele.country}</td>
        </tr>
    );
    })}
      </tbody>
      <tfoot></tfoot>
    </table>
    
  </form>
    </div>
  ) ;
}

export default EmployeesForm;
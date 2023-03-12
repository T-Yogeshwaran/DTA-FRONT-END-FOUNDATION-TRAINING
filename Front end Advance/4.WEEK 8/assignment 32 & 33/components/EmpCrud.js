import { useState } from "react";
import dataServiceObj from "./DataService";

function EmpCrud()
{
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [deptno, setDeptno] = useState("");
    const [empsArray, setEmpsArray] = useState( []);

    let url  = "http://localhost:5000/emps/";
     
    function getEmpButton_click()
    { 
        dataServiceObj.getAllEmployees().then((resData) => 
        {
            setEmpsArray( resData.data );      
        });        
    }

    function addEmpButton_click()
    {
        let empObj = { };
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.deptno = deptno;

        dataServiceObj.addEmployee(empObj).then((resData) => 
        {
            alert("New Employee details are saved in server");
            getEmpButton_click();
        });            
    }

    function deleteEmp_click(eno)
    {
       
        dataServiceObj.deleteEmployee(eno).then((resData) => 
        {
            alert("Requested Employee details are deleted from server");
            getEmpButton_click();    
        });  
    }

    function selectEmp_click(eno)
    {
   
      dataServiceObj.getEmployeeById(eno).then((resData) => 
      {
        let empObj =  resData.data;
        setEmpno(empObj.empno);
        setEname(empObj.ename);       
        setJob(empObj.job);       
        setDeptno(empObj.deptno);    
      });  

         
    }


    function  updateEmpButton_click()
    {
        let empObj = { };
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.deptno = deptno;
 

       dataServiceObj.updateEmployee(empObj).then((resData) => 
        {
            alert("Employee details are updated in server");
            getEmpButton_click();
        });            
    }

    let result = empsArray.map( (item,index) => 
        <tr style={ {backgroundColor: (index % 2 == 0)?"pink":"lightblue" } }>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.deptno}</td>
            <td>
                <a href="#"  onClick={() => { selectEmp_click(item.empno)} }>Select</a> |
                <a href="#"  onClick={() => { deleteEmp_click(item.empno)} }>Delete</a>
            </td>
        </tr> );

    return (
        <>

             <h3>Perform CRUD Operations on Array of Object</h3>
             <hr/>

              <input value={empno} placeholder="Empno" onChange={(e) => setEmpno(e.target.value)} />
              <input value={ename} placeholder="Ename" onChange={(e) => setEname(e.target.value)} />
              <input value={job} placeholder="Job" onChange={(e) => setJob(e.target.value)} />
              <input value={deptno} placeholder="Deptno" onChange={(e) => setDeptno(e.target.value)} />
              <br/>
              <br/>

              <input type="button" onClick={getEmpButton_click}  value="Get Employees"  />
              <input type="button" onClick={addEmpButton_click}  value="Add Employee"  />
              <input type="button" onClick={updateEmpButton_click}  value="Update Employee"  />
              <hr/>
             <table border="2">

             <tr style={ {backgroundColor:"lightgreen"} }>
                    <th>Empno</th>
                    <th>Ename</th>
                    <th>Job</th>
                    <th>Deptno</th>
                    <th></th>
                </tr>

                {result}
             </table>
                
        </>)
}

export default EmpCrud;
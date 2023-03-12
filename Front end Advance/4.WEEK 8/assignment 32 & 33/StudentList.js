import { useState } from "react";
import dataServiceObj from "./StudentService";

function StudentList()
{
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [empsArray, setEmpsArray] = useState( []);

    let url  = "http://localhost:5000/students/";
     
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
        empObj.id = empno;
        empObj.name = ename;
        empObj.age = job;
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
        setEmpno(empObj.id);
        setEname(empObj.name);       
        setJob(empObj.age);       
       });  

         
    }


    function  updateEmpButton_click()
    {
        let empObj = { };
        empObj.id = empno;
        empObj.name = ename;
        empObj.age = job;
       

       dataServiceObj.updateEmployee(empObj).then((resData) => 
        {
            alert("Employee details are updated in server");
            getEmpButton_click();
        });            
    }

    let result = empsArray.map( (item,index) => 
        <tr style={ {backgroundColor: (index % 2 == 0)?"pink":"lightblue" } }>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
                <a href="#"  onClick={() => { selectEmp_click(item.id)} }>Select</a> |
                <a href="#"  onClick={() => { deleteEmp_click(item.id)} }>Delete</a>
            </td>
        </tr> );

    return (
        <>

             <h3>Perform CRUD Operations on JSON</h3>
           

              <input value={empno} placeholder="Empno" onChange={(e) => setEmpno(e.target.value)} />
              <input value={ename} placeholder="Ename" onChange={(e) => setEname(e.target.value)} />
              <input value={job} placeholder="Job" onChange={(e) => setJob(e.target.value)} />
                          <br/>
              <br/>

              <input type="button" onClick={getEmpButton_click}  value="Get Employees"  />
              <input type="button" onClick={addEmpButton_click}  value="Add Employee"  />
              <input type="button" onClick={updateEmpButton_click}  value="Update Employee"  />
              <hr/>
             <table border="2">

             <tr style={ {backgroundColor:"lightgreen"} }>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                   
                </tr>

                {result}
             </table>
                
        </>)
}

export default StudentList;
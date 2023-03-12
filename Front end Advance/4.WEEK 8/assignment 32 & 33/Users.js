import { useState } from "react";

import App from "./App";
import React from 'react';
import axios from "axios";
function Users()
{

   
  let url = "https://reqres.in/api/users";


  
  const [empno, setEmpno] = useState("");
  const [ename, setEname] = useState("");
  const [job, setJob] = useState("");
  const [deptno, setDeptno] = useState("");
  const [empsArray, setEmpsArray] = useState( []);
   




    function getEmpButton_click()
    {
        axios.get(url).then(resData => {
        // console.log(resData.data.data);
         setEmpsArray(resData.data.data);
        })
    
    }

  
  


   

    function addEmpButton_click()
    {
        let empObj = { };
        empObj.id = empno;
        empObj.email = ename;
        empObj.first_name = job;
        empObj.last_name= deptno;


    //   let tempArray = empsArray.slice(0);
         let tempArray = [...empsArray];   
        tempArray.push(empObj);

        setEmpsArray(tempArray);         
    }

    function deleteEmp_click(eno)
    {
        let tempArray = [...empsArray];   
        let index  = tempArray.findIndex( item => item.empno == eno );
        tempArray.splice(index, 1);
        setEmpsArray(tempArray); 
    }

    function selectEmp_click(eno)
    {
        let tempArray = [...empsArray];   
        let empObj  = tempArray.find( item => item.id == eno );
       // alert(  JSON.stringify(empObj) );

       console.log(empObj.id);
       setEmpno(empObj.id);
       setEname(empObj.email);       
       setJob(empObj.first_name);       
       setDeptno(empObj.last_name);       
    }


    function  updateEmpButton_click(eno)
    {
       let updateEmp = { };

       updateEmp.id = empno;
       updateEmp.email = ename;
       updateEmp.first_name = job;
       updateEmp.last_name = deptno;

       let tempArray = [...empsArray];   
       let index  = tempArray.findIndex( item => item.id == eno );
console.log(index);
tempArray[index] = updateEmp;

       setEmpsArray (tempArray);

    }


    let result = empsArray.map( (item,index) => {
       return (
       <tr style={ {backgroundColor: (index % 2 == 0)?"pink":"lightblue" } }>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>
                <a href="#"  onClick={() => { selectEmp_click(item.id)} }>Select</a> |
                <a href="#"  onClick={() => { deleteEmp_click(item.id)} }> Delete</a> | 
                <a href="#" onClick={() => { updateEmpButton_click(item.id)}}>Update Students</a> |            </td>
        </tr> )}
        );
    

    return (
        <>

           




             <h3>Perform CRUD Operations on Array of Students</h3>
             <hr/>

              <input value={empno} placeholder="Empno" onChange={(e) => setEmpno(e.target.value)} />
              <input value={ename} placeholder="Ename" onChange={(e) => setEname(e.target.value)} />
              <input value={job} placeholder="Job" onChange={(e) => setJob(e.target.value)} />
              <input value={deptno} placeholder="Deptno" onChange={(e) => setDeptno(e.target.value)} />
              <br/>
              <br/>

              <input type="button" onClick={getEmpButton_click}  value="Get Students"  />
              <input type="button" onClick={addEmpButton_click}  value="Add Students"  />
              <input type="button" onClick={updateEmpButton_click}  value="Update Students"  />
              <hr/>
             <table border="2">

             <tr style={ {backgroundColor:"lightgreen"} }>
                    <th>Stud-id</th>
                    <th>Std-name</th>
                    <th>Class</th>
                    <th>Dept</th>
                    <th></th>
                </tr>

                {result}
             </table>

<hr/>
          
                
        </>)
}

export default Users;




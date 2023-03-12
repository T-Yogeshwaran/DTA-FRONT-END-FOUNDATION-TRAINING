import { useState } from "react";
import App from "./App";
import React from 'react';
function Table()
{

    const [myArray, setMyArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
  
    function handleAddItem() {
      setMyArray([...myArray, inputValue]);
      setInputValue('');
    }
  


    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [deptno, setDeptno] = useState("");
    const [empsArray, setEmpsArray] = useState( []);
     
    function getEmpButton_click()
    {
        let tempArray = [
            {  empno : 10256, ename:"Scott", job: "TENTH", deptno : "CSE"  },
            {  empno : 10257, ename:"Smith", job: "TENTH", deptno : "CSE"  },
            {  empno : 10258, ename:"Sandy", job: "SIXTH", deptno : "IT"  },
            {  empno : 10259, ename:"Sam", job: "SEVENTH", deptno : "mECH"  } 
        ];

        setEmpsArray(tempArray);         
    }

    function addEmpButton_click()
    {
        let empObj = { };
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.deptno = deptno;


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
        let empObj  = tempArray.find( item => item.empno == eno );
       // alert(  JSON.stringify(empObj) );

       setEmpno(empObj.empno);
       setEname(empObj.ename);       
       setJob(empObj.job);       
       setDeptno(empObj.deptno);       
    }


    function  updateEmpButton_click()
    {
       let updateEmp = { };

       updateEmp.empno = empno;
       updateEmp.ename = ename;
       updateEmp.job = job;
       updateEmp.deptno = deptno;

       let tempArray = [...empsArray];   
       let index  = tempArray.findIndex( item => item.empno == empno );
console.log(index);
tempArray[index] = updateEmp;

       setEmpsArray (tempArray);

    }

    let result = empsArray.map( (item,index) => 
        <tr style={ {backgroundColor: (index % 2 == 0)?"pink":"lightblue" } }>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.deptno}</td>
            <td>
                <a href="#"  onClick={() => { selectEmp_click(item.empno)} }>Select</a> |
                <a href="#"  onClick={() => { deleteEmp_click(item.empno)} }> Delete</a> | 
                <a href="#"  onClick={() => { updateEmpButton_click(item.empno)} }> UPDATE</a>
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
                    <th>Stud-id</th>
                    <th>Std-name</th>
                    <th>Class</th>
                    <th>Dept</th>
                    <th></th>
                </tr>

                {result}
             </table>

          
                
        </>)
}

export default Table




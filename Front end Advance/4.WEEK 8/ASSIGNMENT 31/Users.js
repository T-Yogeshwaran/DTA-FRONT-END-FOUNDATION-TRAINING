import { useState } from "react";
import App from "./App";
import React from 'react';
import axios from "axios";
function Users()
{

    const [empsArray, setMyArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
   
  let url = "https://reqres.in/api/users";



    function getEmpButton_click()
    {
        axios.get(url).then(resData => {
         console.log(resData.data.data);
         setMyArray(resData.data.data);
        })
    
    }



    let result = empsArray.map( (item,index) => {
       return (
       <tr style={ {backgroundColor: (index % 2 == 0)?"pink":"lightblue" } }>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
        </tr> )}
        );
    

    return (
        <>

            <input type="button" onClick={getEmpButton_click}  value="Get Users Data"  />
              <hr/>
             <table border="2">

             <tr style={ {backgroundColor:"lightgreen"} }>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First-Name</th>
                    <th>LAst-Name</th>
                   
                </tr>
                {result}
             </table>

          
                
        </>)
}

export default Users;




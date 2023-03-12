import {useState}  from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() { 

  const[uname, setUname]  = useState("");
  const[password, setPassword]  = useState("");
  const [result,  setResult] =  useState("");

  let navgiate = useNavigate();
 

  function  loginClick()
  {      
    if(uname == "admin" && password == "admin123")
    {
       //   setResult("Welcome to Admin");
       navgiate("/Admin");
    }
    else
    {
        setResult("Invalid user name or password");
    }    
  }
   
 
  return (
    <div>
      <h3>User Login</h3>
 
      User Name  :  
      <input type="text"  onChange={(e) => { setUname(e.target.value) }}   />
      <br/><br/>

      Password  :  
      <input type="password" onChange={(e) => { setPassword(e.target.value) }}     />
      <br/><br/>
 
      <input type="button"  value="Login"  onClick={loginClick}  />

      <h1>{result}</h1> 
    
    </div>
  );
}

export default Login;

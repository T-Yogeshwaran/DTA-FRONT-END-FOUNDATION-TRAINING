import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import About from './components/About';
import Contact from './components/Contact';
import Emps from './components/Emps';
import Depts from './components/Depts';

import {Routes, Route, Link, BrowserRouter as Router, Outlet} from 'react-router-dom';
import NotFound from './components/NotFound';
import Details from './components/Details';
import Login from './components/Login';
import Students from './Users';





const routing = (
  <Router>
 
     <div style={{textAlign:"center"}} >
        <h3>Routing implementation in React JS</h3>
      <hr/>
        <Link to="/">Home</Link> |
        <Link to="/Emps">Employees</Link> | 
        <Link to="/Depts">Departments</Link> | 
        <Link to="/Students">Student Details</Link> | 

        <Link to="/About">About Us</Link> | 
        <Link to="/Contact">Contact Us</Link> |
        <Link to="/Hello">Invalid</Link> |
        <Link to="/Admin">Admin</Link> |
        <Link to="/Login">Login</Link> |
        <hr/>
    </div>

    <Routes>
         <Route  path="/"       element={ <App /> } />     {/* Default Component */}
         <Route  path="/Emps"  element={ <Emps /> } />
         <Route  path="/Depts"  element={ <Depts /> } />
         <Route  path="/Students"  element={ <Students /> } />

         <Route  path="/About"  element={ <About /> } />
         <Route  path="/Contact"  element={ <Contact /> } />
         <Route  path="/Login"  element={ <Login /> } />

         {/* Nested Routes Configuration */}
         <Route  path="/Admin"  element={ <Admin /> } >
              <Route index  element={ <AdminHome /> }  />
              <Route  path="Projects"  element={ <Projects /> } />
              <Route  path="Customers"  element={ <Customers /> } />
         </Route>

         {/* Route with parameter */}
         <Route  path="/Details/:id"  element={ <Details /> } />

         {/* Invalid Routes -- 404 */}
         <Route  path="*"  element={ <NotFound /> } />
    </Routes>
  </Router>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function Admin()
{
  return (
    <>
          <h3>This is Admin Component</h3>
          <Link  to="">Admin Home</Link> |
          <Link to="Projects">Projects</Link> |
          <Link  to="Customers">Customers</Link> | 

          <div style={{backgroundColor:'LightBlue', padding: '10px'}}>
          <Outlet /> 
          </div>
         

    </>
  );
}


function AdminHome()
{
  return (
    <>
          <h3>This is Admin Home Component : Defualt in Admin</h3> 
    </>
  );
}



function Projects()
{
  return (
    <>
          <h3>This is Projects component under Admin</h3> 
    </>
  );
}



function Customers()
{
  return (
    <>
          <h3>This is Customers component under Admin</h3> 
    </>
  );
}
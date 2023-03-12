import logo from './logo.svg';

import React from 'react';


import ProductsList from './productlist';

function App() {
  let  students =  [
    {  sid : 10256, sname:"Scott", course: "Manager", age : 10 , total : 200 },
    {  sid : 10257, sname:"Smith", course: "Lead", age : 20 , total : 200  },
    {  sid : 10258, sname:"Sandy", course: "Programmer", age : 30, total : 200  },
    {  sid : 10259, sname:"Sam", course: "Tester", age : 40, total : 200  },
    {  sid : 10256, sname:"Scott", course: "Manager", age : 10 , total : 200 },
    {  sid : 10257, sname:"Smith", course: "Lead", age : 20 , total : 200},
    {  sid : 10258, sname:"Sandy", course: "Programmer", age : 30 , total : 200 },
    {  sid : 10259, sname:"Sam", course: "Tester", age : 40 , total : 200 }
];


let  doctors =  [
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000, star : 4},
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000 },
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000 },
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000 },
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000 },
  {  img : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' , name:"Scott", specialization: "Manager", contact : 10000000 },
 
  
];


let result = students.map( (item,index) => 
<tr style={ {border:'2px dotted red', height: '50%', width:'80%'} }>
    <td>{item.sid}</td>
    <td>{item.sname}</td>
    <td>{item.course}</td>
    <td>{item.age}</td>
    <td>{item.total}</td>

</tr>

);

let dr = doctors.map( (item,index) => 

<div class="grid-item">
<div className="doctor-card">
<img className="doctor-img" src={item.img} alt={item.name} />
<div className="doctor-details">
  <h2>{item.name}</h2>
  <p>{item.specialization}</p>
  <p>{item.contact}</p>
  {[...Array(item.star).keys()].map(num=>(
  <p className='icon'>

<li class="fa fa-star-o ic" style={ {fontsize:'10px', margin: '0px', display: 'inline-block'} }></li>
  </p>     
 ))}

</div>
</div>
</div>
);


return (
<>
     <table className='table' border="2" style={ {height:'70%' , width:'70%', float:'center'}}>

     <tr style={ {backgroundColor:"pink"} }>
            <th>Empno</th>
            <th>Ename</th>
            <th>Job</th>
            <th>Deptno</th>
            <th>Total</th>

        </tr>

        {result}
     </table>

 <div className='card' >



 <div class="grid-container">
  {dr}
 
   
    </div>
    
 </div>
<hr></hr>

<div className='card'>
<h3>Mobile Category</h3>
<ProductsList   category="Mobiles"   />
</div>



<hr></hr>

<div className='card'>
<h3>Laptops Category</h3>
<ProductsList   category="Laptops"   />
			{/* <ProductsList   category="Laptops"   />
			<ProductsList   category=""   />
			<ProductsList   />
       */}

</div>

<hr></hr>
<div className='card'>
<h3>All category ProductsList</h3>

			<ProductsList   />
       

</div>


        
</>)
}

export default App;

import { useState } from "react";

import Table from './Table';
import Users from "./Users"
function  App()
{  
    const [res, setMessage] = useState("");
    const [message,  setResult] =  useState("");

    function  buttonClick()
    {  
       var txtObj1 = document.getElementById("t1");
       var txtObj2 = document.getElementById("t2");        
       var txtObj3 = document.getElementById("t3");        

       setMessage("Product Name:" + txtObj1.value);  
       setResult("Total Value" + txtObj2.value * txtObj3.value);  


    }


    

    return (
        <div>

           {/* <h3>Calculate PRoduct</h3>
           <hr/>
            Product Name  :  <input id="t1" type="text"  />
            Quantity :  <input id="t2" type="text"  />

            price  :  <input id="t3" type="text"  />

            <input type="button"  onClick={buttonClick} value="Get Message" />

            <h1>{res}</h1>
            <h3>{message}</h3>
          <hr/> */}
<Users/>
          {/* <Table /> */}
        </div>
    );
}


export default App;
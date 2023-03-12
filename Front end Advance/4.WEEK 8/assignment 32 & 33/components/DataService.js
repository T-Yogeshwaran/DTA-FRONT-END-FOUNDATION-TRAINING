import axios from 'axios';

let dataServiceObj = {};

let url = "http://localhost:5000/emps/";

dataServiceObj.getAllEmployees = function()
{	
    return axios.get(url);
};

dataServiceObj.getEmployeeById = function(eno)
{	
    return axios.get(url + eno);
};

dataServiceObj.addEmployee = function(empObj)
{	
    return axios.post(url, empObj);
};

dataServiceObj.updateEmployee = function(empObj)
{	
    return axios.put(url + empObj.empno,   empObj);
};

dataServiceObj.deleteEmployee = function(eno)
{	
    return axios.delete(url + eno);
};

export default dataServiceObj;
	
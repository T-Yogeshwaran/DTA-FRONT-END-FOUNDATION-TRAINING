import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class DataService {

  public url:string  = "http://localhost:3000/customers/";

  constructor(private httpObj:HttpClient)
  {
    
  }

  public getAllEmployees():any
  {
     return this.httpObj.get(this.url);
  }
  
  public getEmployeeById(id:number) : any
  {	
      return this.httpObj.get(this.url + id);
  }

  public addEmployee(empObj:any) : any
  {	
      return this.httpObj.post(this.url, empObj);       
  }

  public updateEmployee(empObj:any)
  {	
      return this.httpObj.put(this.url + empObj.id,   empObj);
  }

  public deleteEmployee(eno:number)
  {	
      return this.httpObj.delete(this.url + eno);
  }
}

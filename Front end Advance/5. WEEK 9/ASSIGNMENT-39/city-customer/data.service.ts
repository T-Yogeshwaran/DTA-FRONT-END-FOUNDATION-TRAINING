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

  public getCustomers():any
  {
     return this.httpObj.get(this.url);
  }
  
  public getEmployeeById(city:string) : any
  {	

    
      return this.httpObj.get(this.url + city);
  }
}
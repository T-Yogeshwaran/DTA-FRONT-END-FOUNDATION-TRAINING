import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  
  
  public id:any = "";
  public name:string = "";
  public city:string = "";
  public email:string  = "";
  public country:string = "";

  

  // using any
  public  empsArray:any[]  =  [];


  constructor(private dataServiceObj:DataService)
  {

  }


  public  getEmpsButton_click()
  {
       this.dataServiceObj.getAllEmployees().subscribe( (resData:any) => 
       {
         // console.log(resData);
         this.empsArray = resData;
       });	
  }

  public addEmpButton_click()
  {
      let empObj:any = { };
      empObj.id = this.id;
      empObj.name = this.name;
      empObj.city = this.city;
      empObj.email = this.email;   
      empObj.country = this.country;


      this.dataServiceObj.addEmployee(empObj).subscribe( (resData:any) => 
      {
        alert("New Employee details are saved in server");
        this.getEmpsButton_click();
      });

  }

  public deleteEmpButton_click(eno:number)
  {
    this.dataServiceObj.deleteEmployee(eno).subscribe( (resData:any) => 
    {
      alert("Requested Employee details are deleted from server");
      this.getEmpsButton_click();
    });
  }

  public selectEmpButton_click(id:any)
  {
      this.dataServiceObj.getEmployeeById(id).subscribe( (resData:any) => 
      
      
      {
        let empObj:any  = resData;

        this.id = empObj.id ;
        this.name = empObj.name ;
         this.city =  empObj.city;
         this.email = empObj.email;   
        this.country = empObj.country;


     
      });
  }
  
  public updateEmpButton_click( )
  {
    let empObj:any = { };
    empObj.id = this.id;
    empObj.name = this.name;
    empObj.city = this.city;
    empObj.email = this.email;   
    empObj.country = this.country;
    this.dataServiceObj.updateEmployee(empObj).subscribe( (resData:any) => 
    {
      alert("Employee details are updated in server");
      this.getEmpsButton_click();
    });
  }
  


}

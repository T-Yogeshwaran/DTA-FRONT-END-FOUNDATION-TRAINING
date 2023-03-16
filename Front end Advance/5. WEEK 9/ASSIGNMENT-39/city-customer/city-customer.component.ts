import { Component } from '@angular/core';

import { DataService } from './data.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-customer',
  templateUrl: './city-customer.component.html',
  styleUrls: ['./city-customer.component.css']
})
export class CityCustomerComponent {

  
  public id:any = "";
  public name:string = "";
  public city:string = "";
  public email:string  = "";
  public country:string = "";
  public selectedCity:any="";

  public cities: string[] = [];

  

  // using any
  public  empsArray:any[]  =  [];
  public  customers:any[]  =  [];

  public  city_data:any[]  =  [];




  constructor(private dataServiceObj:DataService)
  {

  }


  ngOnInit(): void {
    this.dataServiceObj.getCustomers().subscribe((response: any) => {
      this.customers = response;
      this.cities = [...new Set(this.customers.map(customer => customer.city))];
    });
  }




  public getCustomersByCity()
  {
    console.log(this.selectedCity);

    this.dataServiceObj.getCustomers().subscribe( (resData:any) => {
      this.empsArray = resData;
      this.city_data = [...new Set(this.empsArray.map(empsArray => empsArray.city === this.selectedCity))];
  });
}
  



}
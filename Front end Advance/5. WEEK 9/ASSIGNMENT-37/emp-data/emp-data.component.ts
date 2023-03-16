import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent {

  public dno:number  = 0;
  public min:number  = 0;
  public max:number  = 0;

  users = [
    { name: 'John', age: 25, gender: 'Male' , grade : 1 },
    { name: 'Sarah', age: 35, gender: 'Female',grade : 3},
    { name: 'Mike', age: 40, gender: 'Male' ,grade : 1},
    { name: 'Emily', age: 28, gender: 'Female' ,grade : 4},
    { name: 'David', age: 30, gender: 'Male',grade : 3 },
    { name: 'Jessica', age: 32, gender: 'Female',grade : 2 },
    { name: 'Emily', age: 28, gender: 'Female',grade : 4 },
    { name: 'David', age: 30, gender: 'Male',grade : 5 },
    { name: 'Jessica', age: 32, gender: 'Female' ,grade : 1},
    { name: 'Emily', age: 28, gender: 'Female',grade : 2 },
    { name: 'David', age: 30, gender: 'Male',grade : 2 },
    { name: 'Jessica', age: 32, gender: 'Female' ,grade : 4},
    { name: 'Emily', age: 28, gender: 'Female',grade : 4 },
    { name: 'David', age: 30, gender: 'Male' ,grade : 3},
    { name: 'Jessica', age: 32, gender: 'Female',grade : 1 }
  ];	

  empdatapipe = this.users;
}

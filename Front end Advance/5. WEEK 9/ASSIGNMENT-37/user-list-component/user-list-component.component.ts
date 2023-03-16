import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent {
  users = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Sarah', age: 35, gender: 'Female' },
    { name: 'Mike', age: 40, gender: 'Male' },
    { name: 'Emily', age: 28, gender: 'Female' },
    { name: 'David', age: 30, gender: 'Male' },
    { name: 'Jessica', age: 32, gender: 'Female' },
    { name: 'Emily', age: 28, gender: 'Female' },
    { name: 'David', age: 30, gender: 'Male' },
    { name: 'Jessica', age: 32, gender: 'Female' },
    { name: 'Emily', age: 28, gender: 'Female' },
    { name: 'David', age: 30, gender: 'Male' },
    { name: 'Jessica', age: 32, gender: 'Female' },
    { name: 'Emily', age: 28, gender: 'Female' },
    { name: 'David', age: 30, gender: 'Male' },
    { name: 'Jessica', age: 32, gender: 'Female' }
  ];
  
  numDisplayed = 4;

  showMore() {
    this.numDisplayed += 4;
  }



}

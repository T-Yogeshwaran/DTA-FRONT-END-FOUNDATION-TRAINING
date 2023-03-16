import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {


  public dno:number  = 0;
  public min:number  = 0;
  public max:number  = 0;

  public  empsArray:any[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10 , unit : 100   },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, unit : 300  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, unit : 400  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, unit : 500  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10, unit : 300  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, unit : 400  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, unit : 200  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, unit : 500  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10, unit : 800  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, unit : 400  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, unit : 200  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, unit : 200  } 
  ];		
}

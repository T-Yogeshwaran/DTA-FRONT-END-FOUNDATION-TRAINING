


function findMax(...nums: number[]) {
   
    var s:number  = 0;
    s = Math.max(...nums);

    
  console.log(`The maximum value is:` +s);


  }
  
  
  class Customer
{     
    public cid:number;
    public cname:string;  
    public cloc:string;  


    constructor(cid:number = 0, cname:string = "" , cloc:string = "")
    {
       this.cid = cid;
       this.cname = cname;
       this.cloc = cloc;

    }

    public showDetails()
    {
        let str:string  = `Customer Id  : ${this.cid}, Customer Name : ${this.cname} , Customer Location : ${this.cloc}`;
        console.log(str);
    }
}


let c1:Customer = new  Customer();
let c2:Customer = new  Customer(54655);
let c3:Customer = new  Customer(54655, "Smith" , "");
let c4:Customer = new  Customer(54655, "Smith" , "Hyd");


c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();

 
 

 


  


 
// Function Calling

console.log("------------------------");


console.log("Passing dobule Value:");
findMax(1, 5, 8, 3, 10, 2);
console.log("------------------------");

console.log("Passing Triple Values:");
findMax(1, 5, 8);
console.log("------------------------");


console.log("Passing Four Values:");
findMax(1, 5, 8, 3);
console.log("------------------------");


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(input:any[], min:number , max:number): any[] {
    let output : any[] = [];
    
   
      output = input.filter(product => product.unit >= min && product.unit <= max);
   
  
    return output;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empdatapipe'
})
export class EmpdatapipePipe implements PipeTransform {
  transform(users:any[]){
    let aa : any[] = [];
    
 
      aa = users.name;
    
    return aa;
  }

}

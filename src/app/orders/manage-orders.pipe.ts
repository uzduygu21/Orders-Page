import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manageOrders'
})
export class ManageOrdersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args?
    value.filter((item,index)=>{
      if(item.orderType.indexOf(args)!=-1){
        return true;
      }
    }):value;
  }

}

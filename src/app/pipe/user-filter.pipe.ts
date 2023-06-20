import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any[] {
    if(searchText) {
      searchText = searchText.toLowerCase();
      return value.filter((res:any) =>{
        return res.firstName.toLowerCase().includes(searchText);
      })
    }
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone:true,
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: any): any[] {
    if(searchText) {
      searchText = searchText.toLowerCase();
      return value.filter((res:any) => {
        return res.title.toLowerCase().includes(searchText);
      });
    }
    return value;
  }
}

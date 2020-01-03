import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemInfo'
})
export class ItemInfoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let item = {
      name: value.split(' - ')[0],
      description: value.split(' - ')[1]
    };
    if (args === 'name') {
      return item.name;
    } else if (args === 'description') {
      return item.description;
    }
    return value;
  }
}

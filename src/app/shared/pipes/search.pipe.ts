import { Pipe, PipeTransform } from '@angular/core';

/*
 * Filter array by selected parameter
 * Usage:
 *   data | search:by:val
 * Example:
 *   {{ [{name: 'test1'}, {name: 'test2}] | search:name:'test1' }}
 *   returns [{name: 'test1'}]
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], by?: string, val?: string): any {
    if (!by || !val) {
      return data;
    }
    return data.filter(el => el[by].includes(val));
  }
}

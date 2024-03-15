import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustom',
  pure: false,
})
export class FilterCustomPipe implements PipeTransform {

  transform(items: any[], field: string, filter: string): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item) => String(item[field].toString().trim().toUpperCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filter.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase()));
  }
}

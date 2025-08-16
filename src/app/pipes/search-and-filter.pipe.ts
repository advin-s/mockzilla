import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../types';

@Pipe({
  name: 'searchAndFilter',
})
export class SearchAndFilterPipe implements PipeTransform {
  transform<T extends { title: string }>(value: T[], searchText: string): T[] {
    if (searchText) {
      return value.filter(({ title }) =>
        title.toLowerCase().includes(searchText)
      );
    }

    return value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(values: any[], term: string): any[] {
    console.log('el term::', term);
    if (!values)
      return [];

    if (!term) {
      console.log("There's not terms!")
      return values;
    }

    term = term.toLowerCase();

    return values.filter((val: any) => val.name.toLowerCase().indexOf(term) >= 0 || val.provider.toLowerCase().indexOf(term) >= 0);

  }

}

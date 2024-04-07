import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {


  transform(num_str: string): string {
    const num_arr = [];

    if (num_str.length <= 4) {
      return num_str;
    }

    for (let i = 0; i < num_str.length; i += 4) {
      num_arr.push(num_str.slice(i, i + 4));
    }

    return num_arr.join('-');
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {


  transform(numStr: string): string {
    const numGroups = [];

    if (numStr.length <= 4) {
      return numStr;
    }

    for (let i = 0; i < numStr.length; i += 4) {
      numGroups.push(numStr.slice(i, i + 4));
    }

    return numGroups.join('-');
  }

}

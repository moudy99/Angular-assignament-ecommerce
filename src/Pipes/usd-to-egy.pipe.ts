import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgy',
  standalone: true
})
export class UsdToEgyPipe implements PipeTransform {

  transform(value: number): number {
    return value * 50.3
  }

}

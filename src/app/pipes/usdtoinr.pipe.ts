import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoinr'
})
export class UsdtoinrPipe implements PipeTransform {

  transform(value: number, usdrate:number, ...args: unknown[]): unknown {
    return (value*usdrate);
  }

}

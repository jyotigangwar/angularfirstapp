import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log('pipe is called')
    var modifiedvalue = "value changed"
    return modifiedvalue;
  }

}

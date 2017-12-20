import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngForObject',
  pure: false
})
export class NgForObjectPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map((key) => {
      return {
        key: key,
        value: value[key]
      }
    });
  }
}

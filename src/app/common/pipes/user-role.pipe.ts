import { Pipe, PipeTransform } from '@angular/core';
import { ROLE_MAP } from '../services/users.service';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return ROLE_MAP[value];
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_MAP } from '../services/users.service';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return STATUS_MAP[value];
  }
}

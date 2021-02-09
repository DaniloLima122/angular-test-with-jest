import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNotation'
})
export class UserNotationPipe implements PipeTransform {

  transform(value: string): string {

    return '@' + value.toLowerCase().replace(/@/g,'');
  }

}

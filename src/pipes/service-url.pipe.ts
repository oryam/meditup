import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceUrl',
})
export class ServiceUrlPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}

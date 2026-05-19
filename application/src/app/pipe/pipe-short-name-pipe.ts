import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeShortName',
})
export class PipeShortNamePipe implements PipeTransform {
  transform(fullNames: string): string {
    const parts = fullNames.split(' ');
    if(parts.length < 2) 
    return fullNames;
    const first = parts[0].charAt(0).toUpperCase();
    const last = parts[1];
    return `${first}.${last}`
  }
}

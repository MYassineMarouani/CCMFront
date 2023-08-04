// date-format.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Your logic to format the date here
    // For simplicity, we'll just split the date and time and return the formatted string
    const parts = value.split('T');
    const datePart = parts[0];
    const timePart = parts[1].substring(0, 5); // We only want the first 5 characters of the time

    return `${datePart} ${timePart}`;
  }
}

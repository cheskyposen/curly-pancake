import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {
  private count: number;
  private output: string;

  transform(value: string): string {
    this.count = Math.floor(+value / 5);
    this.output = value.toString() + ' ';
    for (let i = 0; i < this.count; i++) {
      this.output = this.output + '*';
    }
    return this.output;
  }

}

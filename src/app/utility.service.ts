import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  consecutiveNumbers(n: number, factor?: number): number[] {
    return [...Array(n).keys()].map(e => (factor || 1) * e);
  }

  isNumeric(val: any): boolean {
    return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0;
  }

  randomString(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

}

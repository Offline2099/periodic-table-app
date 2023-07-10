import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  consecutiveNumbers(n: number): number[] {
    return [...Array(n).keys()];
  }

  multipliedConsecutiveNumbers(n: number, factor: number): number[] {
    return [...Array(n).keys()].map(e => factor * e);
  }

  isNumeric(val: any): boolean {
    return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0;
  }

}

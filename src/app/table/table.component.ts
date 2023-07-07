import { Component, OnInit, AfterViewInit } from '@angular/core';

import { chemicalElement } from '../data/interfaces';
import { Elements } from '../data/chemical-elements';

import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(private u: UtilityService) { }

  arrP: number[] = this.u.consecutiveNumbers(7);
  arrG: number[] = this.u.consecutiveNumbers(18);
  arrExc: number[] = this.u.consecutiveNumbers(7);

  arrTable: Array<chemicalElement | undefined>[] = [];
  arrLanthanoides: chemicalElement[] = [];
  arrActinoides: chemicalElement[] = [];

  v = {
    mobile: {start: 0, range: 3, end: 2, bp: [0]},
    tablet: {start: 0, range: 6, end: 5, bp: [0]},
    desktop: {start: 0, range: 9, end: 8, bp: [0]}
  };

  exceptionsContainerMobileCollapsed = true;

  periodHovered: number | undefined;
  groupHovered: number | undefined;

  pickedElement: chemicalElement | undefined;

  ngOnInit(): void {
    this.constructTable();
    this.calculateVisibilityBreakpoints();
  }

  ngAfterViewInit(): void {
    this.preLoadImages();
  }

  constructTable(): void {

    // Main Table 
    this.arrP.forEach(p => {
      let period: Array<chemicalElement | undefined> = [];
      this.arrG.forEach(g => {
        period.push(Elements.find(e => e.period == p + 1 && e.group == g + 1));
      });
      this.arrTable.push(period);
    });

    // Lanthanoides and Actinoides
    this.arrLanthanoides = Elements.filter(e => e.group == -1);
    this.arrActinoides = Elements.filter(e => e.group == -2);
  }

  calculateVisibilityBreakpoints(): void {

    let calcBP = (n: number) => {
      return this.u.multipliedConsecutiveNumbers(18 / n, n);
    }

    this.v.mobile.bp = calcBP(this.v.mobile.range);
    this.v.tablet.bp = calcBP(this.v.tablet.range);
    this.v.desktop.bp = calcBP(this.v.desktop.range);
  }

  setVisibility(mode: number, start: number): void {

    if (mode == 1) {
      this.v.mobile.start = start;
      this.v.mobile.end = start + this.v.mobile.range - 1;
    }

    if (mode == 2) {
      this.v.tablet.start = start;
      this.v.tablet.end = start + this.v.tablet.range - 1;
    }

    if (mode == 3) {
      this.v.desktop.start = start;
      this.v.desktop.end = start + this.v.desktop.range - 1;
    }
  }

  shiftVisibility(mode: number, increment: number): void {

    let start: number = 0;

    if (mode == 1) start = this.v.mobile.start;
    if (mode == 2) start = this.v.tablet.start;
    if (mode == 3) start = this.v.desktop.start;

    let newStart = start + increment;

    if (newStart >= 0 && newStart <= 18 - increment) {
      this.setVisibility(mode, newStart);
    }
  }

  toggleExceptionsContainerMobile(): void {
    this.exceptionsContainerMobileCollapsed = 
      !this.exceptionsContainerMobileCollapsed;
  }

  pickElement(element: chemicalElement | undefined): void {
    this.pickedElement = element;
  }

  pickElementByNumber(number: number): void {
    this.pickElement(Elements.find(e => e.number == number));
  }

  preLoadImages(): void {
    Elements.forEach(e => {
      if (!e.noImage) {
        let img = new Image();
        img.src = './assets/img/elements/' + e.number + '.jpg';
      }
    });
  }
  
}

import { Component, OnInit } from '@angular/core';

import { chemicalElement } from '../data/interfaces';
import { Elements } from '../data/chemical-elements';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  arrP: number[] = this.consecutiveNumbers(7);
  arrG: number[] = this.consecutiveNumbers(18);
  arrExc: number[] = this.consecutiveNumbers(7);

  arrTable: Array<chemicalElement | undefined>[] = [];
  arrLanthanoides: chemicalElement[] = [];
  arrActinoides: chemicalElement[] = [];

  visibilityMobile: number = 3;
  visibilityTablet: number = 6;
  visibilityDesktopSmall: number = 9;

  visibilityWindowStartMobile: number = 0;
  visibilityWindowStartTablet: number = 0;
  visibilityWindowStartDesktopSmall: number = 0;

  arrVisibilityMobile: boolean[][] = [];
  arrVisibilityTablet: boolean[][] = [];
  arrVisibilityDesktopSmall: boolean[][] = [];

  arrButtonsMobile: number[] = [0, 3, 6, 9, 12, 15];
  arrButtonsTablet: number[] = [0, 6, 12];
  arrButtonsDesktopSmall: number[] = [0, 9];

  exceptionsContainerMobileCollapsed = true;

  periodHovered: number | undefined;
  groupHovered: number | undefined;

  pickedElement: chemicalElement | undefined;

  constructor() { }

  ngOnInit(): void {
    this.constructTable();
    this.setVisibility(1, this.visibilityWindowStartMobile);
    this.setVisibility(2, this.visibilityWindowStartTablet);
    this.setVisibility(3, this.visibilityWindowStartDesktopSmall);
  }

  consecutiveNumbers(n: number): number[] {
    return [...Array(n).keys()];
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

  setVisibility(mode: number, group: number): void {

    let visibilityRange: number;

    if (mode == 1) {
      this.arrVisibilityMobile = [];
      this.visibilityWindowStartMobile = group;
      visibilityRange = this.visibilityMobile;
    }

    if (mode == 2) {
      this.arrVisibilityTablet = [];
      this.visibilityWindowStartTablet = group;
      visibilityRange = this.visibilityTablet;
    }

    if (mode == 3) {
      this.arrVisibilityDesktopSmall = [];
      this.visibilityWindowStartDesktopSmall = group;
      visibilityRange = this.visibilityDesktopSmall;
    }

    this.arrP.forEach(p => {
      let period: boolean[] = [];
      this.arrG.forEach(g => {
        period.push(g >= group && g <= group + visibilityRange - 1);
      });
      if (mode == 1) this.arrVisibilityMobile.push(period);
      if (mode == 2) this.arrVisibilityTablet.push(period);
      if (mode == 3) this.arrVisibilityDesktopSmall.push(period);
    });
  }

  changeVisibilityWindow(mode: number, increment: number): void {

    let visibilityWindowStart: number = 0;

    if (mode == 1) visibilityWindowStart = this.visibilityWindowStartMobile;
    if (mode == 2) visibilityWindowStart = this.visibilityWindowStartTablet;
    if (mode == 3) visibilityWindowStart = this.visibilityWindowStartDesktopSmall;

    let newStart = visibilityWindowStart + increment;

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
  
}

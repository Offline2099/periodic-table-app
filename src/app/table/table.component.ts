import { Component, OnInit } from '@angular/core';

import { chemicalElement } from '../data/interfaces';
import { Elements } from '../data/chemical-elements';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  arrP: number[] = [...Array(7).keys()];
  arrG: number[] = [...Array(18).keys()];
  arrExc: number[] = [...Array(7).keys()];

  arrTable: Array<chemicalElement | undefined>[] = [];
  arrLanthanoides: chemicalElement[] = [];
  arrActinoides: chemicalElement[] = [];

  pickedElement: chemicalElement | undefined;

  visibilityMobile = 3;
  visibilityTablet = 6;
  visibilityDesktopSmall = 9;

  visibilityWindowStartMobile: number = 0;
  visibilityWindowStartTablet: number = 0;
  visibilityWindowStartDesktopSmall: number = 0;

  arrVisibilityMobile: boolean[][] = [];
  arrVisibilityTablet: boolean[][] = [];
  arrVisibilityDesktopSmall: boolean[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.constructTable();
    this.setVisibility(1, this.visibilityWindowStartMobile);
    this.setVisibility(2, this.visibilityWindowStartTablet);
    this.setVisibility(3, this.visibilityWindowStartDesktopSmall);
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

  pickElement(element: chemicalElement | undefined): void {
    this.pickedElement = element;
  }

  setVisibility(mode: number, group: number): void {

    let visibilityRange: number;

    if (mode == 1) {
      this.arrVisibilityMobile = [];
      visibilityRange = this.visibilityMobile;
    }

    if (mode == 2) {
      this.arrVisibilityTablet = [];
      visibilityRange = this.visibilityTablet;
    }

    if (mode == 3) {
      this.arrVisibilityDesktopSmall = [];
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
      if (mode == 1) this.visibilityWindowStartMobile = newStart;
      if (mode == 2) this.visibilityWindowStartTablet = newStart;
      if (mode == 3) this.visibilityWindowStartDesktopSmall = newStart;
      this.setVisibility(mode, newStart);
    }
  }

}

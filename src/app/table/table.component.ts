import { Component, Output, EventEmitter } from '@angular/core';

import { ChemicalElement, VisibilityWindow, TableVisibility } from '../interfaces';
import { Elements } from '../data/chemical-elements';
import * as C from '../data/table-constants';

import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private u: UtilityService) { }

  @Output() toggleOverlay = new EventEmitter<void>();

  arrP: number[] = this.u.consecutiveNumbers(C.TotalPeriods);
  arrG: number[] = this.u.consecutiveNumbers(C.TotalGroups);

  arrTable: Array<ChemicalElement | undefined>[] = [];
  arrLanthanides: ChemicalElement[] = [];
  arrActinides: ChemicalElement[] = [];

  v!: TableVisibility;
  ani: number = 1;

  exceptionsContainerMobileCollapsed = true;

  periodHovered: number | undefined;
  groupHovered: number | undefined;

  pickedElement: ChemicalElement | undefined;

  ngOnInit(): void {
    this.constructTable();
    this.calculateVisibilityRanges();
  }

  ngAfterViewInit(): void {
    this.preLoadImages();
  }

  constructTable(): void {

    this.arrP.forEach(p => {
      let period: Array<ChemicalElement | undefined> = [];
      this.arrG.forEach(g => {
        period.push(Elements.find(e => e.period == p + 1 && e.group == g + 1));
      });
      this.arrTable.push(period);
    });

    this.arrLanthanides = Elements.filter(e => e.group == C.GroupLanthanides);
    this.arrActinides = Elements.filter(e => e.group == C.GroupActinides);
  }

  calculateVisibilityRanges(): void {

    const PartsMobile: number = 6;
    const PartsTablet: number = 3;
    const PartsDesktop: number = 2;

    let calcRanges = (nOfParts: number): VisibilityWindow => {

      let range: number = C.TotalGroups / nOfParts;

      return {
        start: 0,
        range: range, 
        end: range - 1,
        breakpoints: this.u.consecutiveNumbers(nOfParts, range)
      }
    }

    this.v = {
      mobile: calcRanges(PartsMobile),
      tablet: calcRanges(PartsTablet),
      desktop: calcRanges(PartsDesktop)
    }
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

    this.triggerCellAnmation();
  }

  shiftVisibility(mode: number, increment: number): void {

    let start: number = 0;

    if (mode == 1) start = this.v.mobile.start;
    if (mode == 2) start = this.v.tablet.start;
    if (mode == 3) start = this.v.desktop.start;

    let newStart = start + increment;

    if (newStart >= 0 && newStart <= C.TotalGroups - increment) {
      this.setVisibility(mode, newStart);
    }
  }

  triggerCellAnmation(): void {
    this.ani = this.ani == 1 ? 2 : 1;
  }

  toggleExceptionsContainerMobile(): void {
    this.exceptionsContainerMobileCollapsed = 
      !this.exceptionsContainerMobileCollapsed;
  }

  pickElement(element: ChemicalElement | undefined): void {
    let previous: ChemicalElement | undefined = this.pickedElement;
    this.pickedElement = element;
    if (!previous || !element) this.toggleOverlay.emit();
  }

  pickElementByNumber(number: number): void {
    this.pickElement(Elements.find(e => e.number == number));
  }

  preLoadImages(): void {
    Elements.forEach(e => {
      if (!e.noImage) {
        let img = new Image();
        img.src = `./assets/img/elements/${e.number}.jpg`;
      }
    });
  }
  
}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { ChemicalElement, DataProperty, DataObject } from '../data/interfaces';
import { Properties } from '../data/property-descriptions';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.css']
})
export class ElementInfoComponent implements OnInit, OnChanges {

  constructor(private u: UtilityService) { }

  @Input() e!: ChemicalElement;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<number> = new EventEmitter();

  data: DataObject[] = [];
  imageVisible: boolean = true;

  animation: string = 'animation-1';

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.formDataObjects();
  }

  formDataObjects(): void {

    this.data = [];

    Properties.forEach((p, i) => {

      let val: string | number = this.fillDataValue(i + 1);

      this.data.push({
        name: p.name,
        unit: this.u.isNumeric(val) ? p.unit : '',
        description: p.description,
        value: val
      });
    });
  }

  fillDataValue(id: number): string | number {
    switch (id) {
      case 1:
        return this.e.period || 'N/A';
      case 2:
        return this.e.group > 0 ? this.e.group : 
          this.e.group == -1 ? 'Lanthanoides' :
            this.e.group == -2 ? 'Actinoides' : 'N/A';
      case 3:
        return this.e.discovery || 'Ancient times';
      case 4:
        return this.e.weight || 'N/A';
      case 5:
        return this.e.density || 'N/A';
      case 6:
        return this.e.melt >= -273 ? this.e.melt : 'Unknown';
      case 7:
        return this.e.boil >= -273 ? this.e.boil : 'Unknown';
      default: 
        return 0;
    }
  }

  switchElement(newNumber: number): void {
    this.change.emit(newNumber);
    this.triggerAnmation();
  }

  triggerAnmation(): void {
    if (this.animation == 'animation-1') 
      this.animation = 'animation-2';
    else this.animation = 'animation-1';
  }

  toggleImage(): void {
    this.imageVisible = !this.imageVisible;
  }

}

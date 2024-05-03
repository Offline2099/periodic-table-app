import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ChemicalElement, DataObject } from '../interfaces';
import { Properties } from '../data/property-descriptions';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.scss']
})
export class ElementInfoComponent {

  constructor(private u: UtilityService) { }

  @Input() e!: ChemicalElement;
  
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Output() close: EventEmitter<null> = new EventEmitter();

  data: DataObject[] = [];
  imageVisible: boolean = true;

  ani: number = 1;

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
          this.e.group == -1 ? 'Lanthanides' :
            this.e.group == -2 ? 'Actinides' : 'N/A';
      case 3:
        return this.e.discovery || 'Ancient times';
      case 4:
        return this.e.weight || 'N/A';
      case 5:
        return this.e.density || 'N/A';
      case 6:
        return this.e.melt > -274 ? this.e.melt : 'Unknown';
      case 7:
        return this.e.boil > -274 ? this.e.boil : 'Unknown';
      default: 
        return 'N/A';
    }
  }

  switchElement(newNumber: number): void {
    this.change.emit(newNumber);
    this.triggerAnmation();
  }

  triggerAnmation(): void {
    this.ani = this.ani == 1 ? 2 : 1;
  }

  toggleImage(): void {
    this.imageVisible = !this.imageVisible;
  }

}

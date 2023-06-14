import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { chemicalElement } from '../data/interfaces';

@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.css']
})
export class ElementInfoComponent implements OnInit, OnChanges {

  @Input() e!: chemicalElement;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<number> = new EventEmitter();

  data: any[] = [];
  imageVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.formDataObjects();
  }

  ngOnChanges(): void {
    this.formDataObjects();
  }

  formDataObjects(): void {
    this.data = [
      {
        property: 'Period',
        value: this.e.period || '??'
      },
      {
        property: 'Group',
        value: 
          this.e.group > 0 ? this.e.group : 
            this.e.group == -1 ? 'Lanthanoides' :
              this.e.group == -2 ? 'Actinoides' : '??'
      },
      {
        property: 'Year of discovery',
        value: this.e.discovery || 'Ancient times'
      },
      {
        property: 'Standard atomic weight',
        value: this.e.weight || '??',
        unit: this.e.weight ? `Da` : ''
      },
      {
        property: 'Density',
        value: this.e.density || '??',
        unit: this.e.density ? `kg/m<sup>3</sup>` : ''
      },
      {
        property: 'Melting temperature',
        value: this.e.melt >= 0 ? this.e.melt : 'Unknown',
        unit: this.e.melt >= 0 ? `&deg;C` : ''
      },
      {
        property: 'Boiling temperature',
        value: this.e.boil >= 0 ? this.e.boil : 'Unknown',
        unit: this.e.boil >= 0 ? `&deg;C` : ''
      }
    ]
  }

  toggleImage(): void {
    this.imageVisible = !this.imageVisible;
  }

}

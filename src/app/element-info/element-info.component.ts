import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { chemicalElement } from '../data/interfaces';

@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.css']
})
export class ElementInfoComponent implements OnInit {

  @Input() e!: chemicalElement;
  @Output() close: EventEmitter<any> = new EventEmitter();

  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.formDataObjects();
  }

  formDataObjects(): void {
    this.data = [
      {
        property: 'Discovery',
        value: this.e.discovery || 'Ancient times'
      },
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
        property: 'Standard atomic weight',
        value: this.e.weight || '??',
        unit: this.e.weight ? `Da` : ''
      },
      {
        property: 'Density',
        value: this.e.density || '??',
        unit: this.e.density ? `g/cm<sup>3</sup>` : ''
      },
      {
        property: 'Melting temperature',
        value: this.e.melt >= 0 ? '\u2248 ' + Math.round(this.e.melt - 273) : 'Unknown',
        unit: this.e.melt >= 0 ? `&deg;C` : ''
      },
      {
        property: 'Boiling temperature',
        value: this.e.boil >= 0 ? '\u2248 ' + Math.round(this.e.boil - 273) : 'Unknown',
        unit: this.e.boil >= 0 ? `&deg;C` : ''
      },
    ]
  }

}

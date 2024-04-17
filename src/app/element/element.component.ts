import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {

  @Input() e!: ChemicalElement;

}

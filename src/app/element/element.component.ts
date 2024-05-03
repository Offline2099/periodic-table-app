import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {

  @Input() e!: ChemicalElement;

}

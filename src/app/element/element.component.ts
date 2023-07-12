import { Component, OnInit, Input } from '@angular/core';
import { ChemicalElement } from '../data/_interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() e!: ChemicalElement;

  constructor() { }

  ngOnInit(): void {
  }

}

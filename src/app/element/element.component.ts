import { Component, OnInit, Input } from '@angular/core';
import { chemicalElement } from '../data/interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() e!: chemicalElement;

  constructor() { }

  ngOnInit(): void {
  }

}

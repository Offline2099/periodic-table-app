import { Component, OnInit, Input, HostBinding, OnChanges } from '@angular/core';

import { AnimationElement } from '../interfaces';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css']
})
export class BackgroundAnimationComponent implements OnInit, OnChanges {

  constructor(private u: UtilityService) { }

  @Input() active: boolean = true;
  @Input() mode: string = 'normal';

  @HostBinding('class.inactive') inactive: boolean = false;
  @HostBinding('class.overlay') overlayMode: boolean = false;

  a: AnimationElement[] = [];

  duration: number = 30;

  directions: string[] =  [
    'moveDownRight', 'moveUpRight', 'moveDownLeft', 'moveUpLeft'
  ];

  formulas: string[] =  [
    'H<sub>2</sub>O',
    'SiO<sub>2</sub>',
    'H<sub>2</sub>SO<sub>4</sub>',
    'Mg<sub>3</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>2</sub>',
    '2HCl + 2Na \u2192 2NaCl + H<sub>2</sub>',
    '4Fe + 3O<sub>2</sub> \u2192 2Fe<sub>2</sub>O<sub>3</sub>',
    'CH<sub>4</sub> + 2O<sub>2</sub> \u2192 CO<sub>2</sub> + 2H<sub>2</sub>O',
    'Zn + H<sub>2</sub>SO<sub>4</sub> \u2192 H<sub>2</sub> + ZnSO<sub>4</sub>',
    'CaCl<sub>2</sub> + 2AgNO<sub>3</sub> \u2192 Ca(NO<sub>3</sub>)<sub>2</sub> + 2AgCl',
    'CO<sub>2</sub> + 6H<sub>2</sub>O \u2192 6O<sub>2</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>'
  ];

  ngOnInit(): void {
    this.generateAnimation();
    if (this.mode == 'overlay') this.overlayMode = true;
  }

  ngOnChanges(): void {
    if (this.inactive == this.active) this.inactive = !this.active;
  }

  generateAnimation(): void {
    this.a = this.u.consecutiveNumbers(150).map(e => ({
      text: this.randomString(this.formulas),
      position: this.randomPosition(),
      direction: this.randomString(this.directions),
      delay: Math.random() * this.duration - this.duration
    }));
  }

  randomString(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  randomPosition(): {x: number, y: number} {
    let x: number = 50, y: number = 50;
    while (x > 35 && x < 65 && y > 35 && y < 65) {
      x = Math.random() * 130 - 15;
      y = Math.random() * 120 - 10;
    }
    return {x: x, y: y}
  }

}

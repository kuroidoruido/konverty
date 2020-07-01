import { Component } from '@angular/core';

import { UnitsService, UnitState } from './units-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public unitService: UnitsService) {}

  tackByLabel(unit: UnitState): string {
    return unit.label;
  }
}

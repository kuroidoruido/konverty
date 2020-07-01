import { Injectable } from '@angular/core';

import { DATA } from './units.data';

const REFERENTIAL: UnitState[] = DATA.map(unit => ({
  label: unit.label,
  amountForOneCentimeter: unit.amountForOneCentimeter,
  amount: 1 / unit.amountForOneCentimeter,
  editable: unit.label === 'Centimeter',
})).sort(unitComparator);

export interface UnitState {
  label: string;
  amount: number;
  amountForOneCentimeter: number;
  editable: boolean;
}

function unitComparator(a: UnitState, b: UnitState): number {
    if (a.editable) {
      return -10000;
    } else if (b.editable) {
      return 10000;
    } else {
      return a.amountForOneCentimeter - b.amountForOneCentimeter;
    }
}

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  units: UnitState[] = JSON.parse(JSON.stringify(REFERENTIAL));

  constructor() {}

  convert(amount: number, unitLabel: string): void {
    const unitInfo = REFERENTIAL.find(unit => unit.label === unitLabel);
    if (unitInfo) {
      const amountInCentimeter = amount * unitInfo.amountForOneCentimeter;
      this.units.forEach(unit => {
        if (unit.label !== unitLabel) {
          unit.amount = amountInCentimeter / unit.amountForOneCentimeter;
        }
      });
    }
  }

  select(unitLabel: string): void {
    this.units = this.units
      .map(unit => {
        if (unit.label === unitLabel) {
          return { ...unit, editable: true, amount: 1 };
        } else {
          return ({ ...unit, editable: false });
        }
      })
      .sort(unitComparator);
    this.convert(1, unitLabel);
  }

}


export interface UnitData {
    label: string;
    amountForOneCentimeter: number;
}

export const DATA: UnitData[] = [{
    label: 'Centimeter',
    amountForOneCentimeter: 1,
  }, {
    label: 'Inch',
    amountForOneCentimeter: 2.54,
  }, {
    label: 'Raspberry Pi 1B (length)',
    amountForOneCentimeter: 8.56,
  }, {
    label: 'Nokia 3310 (length)',
    amountForOneCentimeter: 11.3,
  }, {
    label: 'Foot',
    amountForOneCentimeter: 30.48,
  }, {
    label: 'Elder Wand', // Baguette de Sureau
    amountForOneCentimeter: 38,
  }, {
    label: 'Yard',
    amountForOneCentimeter: 91.44,
  }, {
    label: 'Meter',
    amountForOneCentimeter: 100,
  }, {
    label: 'Space X Crew Dragon (height)',
    amountForOneCentimeter: 823,
  }
];

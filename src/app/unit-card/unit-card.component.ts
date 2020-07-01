import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss']
})
export class UnitCardComponent {
  @Input() label: string;
  @Input() amount: number;
  @Input() editable = false;

  @Output() amountChange = new EventEmitter<number>();
  @Output() selectUnit = new EventEmitter<void>();
}

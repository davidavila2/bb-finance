import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Holiday } from '@bba/api-interfaces';

@Component({
  selector: 'bba-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.scss'],
})
export class HolidayDetailsComponent {
  currentHoliday: Holiday;
  originalTitle = '';
  @Input() set holiday(value: Holiday) {
    if (value) this.originalTitle = value.title;
    this.currentHoliday = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Holiday } from '@bba/api-interfaces';

@Component({
  selector: 'bba-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.scss'],
})
export class HolidaysListComponent {
  @Input() holidays: Holiday[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

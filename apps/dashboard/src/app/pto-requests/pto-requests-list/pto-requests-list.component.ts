import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PtoRequest } from '@bba/api-interfaces';

@Component({
  selector: 'bba-pto-requests-list',
  templateUrl: './pto-requests-list.component.html',
  styleUrls: ['./pto-requests-list.component.scss'],
})
export class PtoRequestsListComponent {
  @Input() ptoRequests: PtoRequest[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

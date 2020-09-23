import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PtoRequest } from '@bba/api-interfaces';
import { ResourcesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-pto-request-details',
  templateUrl: './pto-request-details.component.html',
  styleUrls: ['./pto-request-details.component.scss'],
})
export class PtoRequestDetailsComponent {
  currentPtoRequest: PtoRequest;
  originalTitle = '';
  @Input() set ptoRequest(value: PtoRequest) {
    if (value) this.originalTitle = value.title;
    this.currentPtoRequest = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor(public resourcesFacade: ResourcesFacade) {
    this.resourcesFacade.loadResources();
  }
}

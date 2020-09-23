import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ResourceRate } from '@bba/api-interfaces';

@Component({
  selector: 'bba-resource-rate-details',
  templateUrl: './resource-rate-details.component.html',
  styleUrls: ['./resource-rate-details.component.scss'],
})
export class ResourceRateDetailsComponent {
  currentResourceRate: ResourceRate;
  originalTitle = '';
  @Input() set resourceRate(value: ResourceRate) {
    if (value) this.originalTitle = value.title;
    this.currentResourceRate = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

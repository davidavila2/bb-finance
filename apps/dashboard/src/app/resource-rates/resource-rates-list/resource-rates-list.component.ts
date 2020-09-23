import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ResourceRate } from '@bba/api-interfaces';

@Component({
  selector: 'bba-resource-rates-list',
  templateUrl: './resource-rates-list.component.html',
  styleUrls: ['./resource-rates-list.component.scss'],
})
export class ResourceRatesListComponent {
  @Input() resourceRates: ResourceRate[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Resource } from '@bba/api-interfaces';

@Component({
  selector: 'bba-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss'],
})
export class ResourcesListComponent {
  @Input() resources: Resource[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Resource } from '@bba/api-interfaces';

@Component({
  selector: 'bba-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
})
export class ResourceDetailsComponent {
  currentResource: Resource;
  originalTitle = '';
  @Input() set resource(value: Resource) {
    if (value) this.originalTitle = value.title;
    this.currentResource = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

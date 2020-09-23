import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProjectResource } from '@bba/api-interfaces';

@Component({
  selector: 'bba-project-resource-details',
  templateUrl: './project-resource-details.component.html',
  styleUrls: ['./project-resource-details.component.scss'],
})
export class ProjectResourceDetailsComponent {
  currentProjectResource: ProjectResource;
  originalTitle = '';
  @Input() set projectResource(value: ProjectResource) {
    if (value) this.originalTitle = value.title;
    this.currentProjectResource = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

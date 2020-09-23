import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProjectResource } from '@bba/api-interfaces';

@Component({
  selector: 'bba-project-resources-list',
  templateUrl: './project-resources-list.component.html',
  styleUrls: ['./project-resources-list.component.scss'],
})
export class ProjectResourcesListComponent {
  @Input() projectResources: ProjectResource[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

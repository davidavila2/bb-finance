import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectResource } from '@bba/api-interfaces';
import { ProjectResourcesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.scss'],
})
export class ProjectResourcesComponent implements OnInit {
  projectResources$: Observable<ProjectResource[]> = this.projectResourcesFacade
    .allProjectResources$;
  selectedProjectResource$: Observable<ProjectResource> = this
    .projectResourcesFacade.selectedProjectResource$;

  constructor(private projectResourcesFacade: ProjectResourcesFacade) {}

  ngOnInit(): void {
    this.reset();
    this.projectResourcesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadProjectResources();
    this.projectResourcesFacade.selectProjectResource(null);
  }

  selectProjectResource(projectResource: ProjectResource) {
    this.projectResourcesFacade.selectProjectResource(projectResource.id);
  }

  loadProjectResources() {
    this.projectResourcesFacade.loadProjectResources();
  }

  saveProjectResource(projectResource: ProjectResource) {
    if (projectResource.id) {
      this.projectResourcesFacade.updateProjectResource(projectResource);
    } else {
      this.projectResourcesFacade.createProjectResource(projectResource);
    }
  }

  deleteProjectResource(projectResource: ProjectResource) {
    this.projectResourcesFacade.deleteProjectResource(projectResource);
  }
}

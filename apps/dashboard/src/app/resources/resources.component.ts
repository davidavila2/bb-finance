import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '@bba/api-interfaces';
import { ResourcesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  resources$: Observable<Resource[]> = this.resourcesFacade.allResources$;
  selectedResource$: Observable<Resource> = this.resourcesFacade
    .selectedResource$;

  constructor(private resourcesFacade: ResourcesFacade) {}

  ngOnInit(): void {
    this.reset();
    this.resourcesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadResources();
    this.resourcesFacade.selectResource(null);
  }

  selectResource(resource: Resource) {
    this.resourcesFacade.selectResource(resource.id);
  }

  loadResources() {
    this.resourcesFacade.loadResources();
  }

  saveResource(resource: Resource) {
    if (resource.id) {
      this.resourcesFacade.updateResource(resource);
    } else {
      this.resourcesFacade.createResource(resource);
    }
  }

  deleteResource(resource: Resource) {
    this.resourcesFacade.deleteResource(resource);
  }
}

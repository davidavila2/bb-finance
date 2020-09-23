import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectResource } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectResourcesService {
  model = 'project-resources';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<ProjectResource[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<ProjectResource>(this.getUrlWithId(id));
  }

  create(projectResource: ProjectResource) {
    return this.http.post(this.getUrl(), projectResource);
  }

  update(projectResource: ProjectResource) {
    return this.http.put(
      this.getUrlWithId(projectResource.id),
      projectResource
    );
  }

  delete(projectResource: ProjectResource) {
    return this.http.delete(this.getUrlWithId(projectResource.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

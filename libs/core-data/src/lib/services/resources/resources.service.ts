import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  model = 'resources';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Resource[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Resource>(this.getUrlWithId(id));
  }

  create(resource: Resource) {
    return this.http.post(this.getUrl(), resource);
  }

  update(resource: Resource) {
    return this.http.put(this.getUrlWithId(resource.id), resource);
  }

  delete(resource: Resource) {
    return this.http.delete(this.getUrlWithId(resource.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

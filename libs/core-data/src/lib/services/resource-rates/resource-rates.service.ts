import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceRate } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceRatesService {
  model = 'resource-rates';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<ResourceRate[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<ResourceRate>(this.getUrlWithId(id));
  }

  create(resourceRate: ResourceRate) {
    return this.http.post(this.getUrl(), resourceRate);
  }

  update(resourceRate: ResourceRate) {
    return this.http.put(this.getUrlWithId(resourceRate.id), resourceRate);
  }

  delete(resourceRate: ResourceRate) {
    return this.http.delete(this.getUrlWithId(resourceRate.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PtoRequest } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PtoRequestsService {
  model = 'pto-requests';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<PtoRequest[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<PtoRequest>(this.getUrlWithId(id));
  }

  create(ptoRequest: PtoRequest) {
    return this.http.post(this.getUrl(), ptoRequest);
  }

  update(ptoRequest: PtoRequest) {
    return this.http.put(this.getUrlWithId(ptoRequest.id), ptoRequest);
  }

  delete(ptoRequest: PtoRequest) {
    return this.http.delete(this.getUrlWithId(ptoRequest.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

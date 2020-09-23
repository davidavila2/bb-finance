import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  model = 'clients';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Client[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Client>(this.getUrlWithId(id));
  }

  create(client: Client) {
    return this.http.post(this.getUrl(), client);
  }

  update(client: Client) {
    return this.http.put(this.getUrlWithId(client.id), client);
  }

  delete(client: Client) {
    return this.http.delete(this.getUrlWithId(client.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

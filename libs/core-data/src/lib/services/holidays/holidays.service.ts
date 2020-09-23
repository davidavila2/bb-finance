import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Holiday } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  model = 'holidays';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Holiday[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Holiday>(this.getUrlWithId(id));
  }

  create(holiday: Holiday) {
    return this.http.post(this.getUrl(), holiday);
  }

  update(holiday: Holiday) {
    return this.http.put(this.getUrlWithId(holiday.id), holiday);
  }

  delete(holiday: Holiday) {
    return this.http.delete(this.getUrlWithId(holiday.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

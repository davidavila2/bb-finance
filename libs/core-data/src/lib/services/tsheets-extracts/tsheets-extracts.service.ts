import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TsheetsExtract } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class TsheetsExtractsService {
  model = 'tsheets-extracts';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<TsheetsExtract[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<TsheetsExtract>(this.getUrlWithId(id));
  }

  create(tsheetsExtract: TsheetsExtract) {
    return this.http.post(this.getUrl(), tsheetsExtract);
  }

  update(tsheetsExtract: TsheetsExtract) {
    return this.http.put(this.getUrlWithId(tsheetsExtract.id), tsheetsExtract);
  }

  delete(tsheetsExtract: TsheetsExtract) {
    return this.http.delete(this.getUrlWithId(tsheetsExtract.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

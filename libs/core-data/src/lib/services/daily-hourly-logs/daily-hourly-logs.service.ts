import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DailyHourlyLog } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class DailyHourlyLogsService {
  model = 'daily-hourly-logs';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<DailyHourlyLog[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<DailyHourlyLog>(this.getUrlWithId(id));
  }

  create(dailyHourlyLog: DailyHourlyLog) {
    return this.http.post(this.getUrl(), dailyHourlyLog);
  }

  update(dailyHourlyLog: DailyHourlyLog) {
    return this.http.put(this.getUrlWithId(dailyHourlyLog.id), dailyHourlyLog);
  }

  delete(dailyHourlyLog: DailyHourlyLog) {
    return this.http.delete(this.getUrlWithId(dailyHourlyLog.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

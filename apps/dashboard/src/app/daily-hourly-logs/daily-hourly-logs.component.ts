import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyHourlyLog } from '@bba/api-interfaces';
import { DailyHourlyLogsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-daily-hourly-logs',
  templateUrl: './daily-hourly-logs.component.html',
  styleUrls: ['./daily-hourly-logs.component.scss'],
})
export class DailyHourlyLogsComponent implements OnInit {
  dailyHourlyLogs$: Observable<DailyHourlyLog[]> = this.dailyHourlyLogsFacade
    .allDailyHourlyLogs$;
  selectedDailyHourlyLog$: Observable<DailyHourlyLog> = this
    .dailyHourlyLogsFacade.selectedDailyHourlyLog$;

  constructor(private dailyHourlyLogsFacade: DailyHourlyLogsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.dailyHourlyLogsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadDailyHourlyLogs();
    this.dailyHourlyLogsFacade.selectDailyHourlyLog(null);
  }

  selectDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    this.dailyHourlyLogsFacade.selectDailyHourlyLog(dailyHourlyLog.id);
  }

  loadDailyHourlyLogs() {
    this.dailyHourlyLogsFacade.loadDailyHourlyLogs();
  }

  saveDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    if (dailyHourlyLog.id) {
      this.dailyHourlyLogsFacade.updateDailyHourlyLog(dailyHourlyLog);
    } else {
      this.dailyHourlyLogsFacade.createDailyHourlyLog(dailyHourlyLog);
    }
  }

  deleteDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    this.dailyHourlyLogsFacade.deleteDailyHourlyLog(dailyHourlyLog);
  }
}

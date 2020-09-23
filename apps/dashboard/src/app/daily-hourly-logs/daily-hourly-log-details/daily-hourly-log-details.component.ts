import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DailyHourlyLog } from '@bba/api-interfaces';
import { ResourcesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-daily-hourly-log-details',
  templateUrl: './daily-hourly-log-details.component.html',
  styleUrls: ['./daily-hourly-log-details.component.scss'],
})
export class DailyHourlyLogDetailsComponent {
  currentDailyHourlyLog: DailyHourlyLog;
  originalTitle = '';
  @Input() set dailyHourlyLog(value: DailyHourlyLog) {
    if (value) this.originalTitle = value.title;
    this.currentDailyHourlyLog = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor(public resourcesFacade: ResourcesFacade) {
    resourcesFacade.loadResources();
  }
}

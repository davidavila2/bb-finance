import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DailyHourlyLog } from '@bba/api-interfaces';

@Component({
  selector: 'bba-daily-hourly-logs-list',
  templateUrl: './daily-hourly-logs-list.component.html',
  styleUrls: ['./daily-hourly-logs-list.component.scss'],
})
export class DailyHourlyLogsListComponent {
  @Input() dailyHourlyLogs: DailyHourlyLog[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

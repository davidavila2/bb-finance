import { Injectable } from '@angular/core';
import { DailyHourlyLog } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';
import * as DailyHourlyLogsSelectors from './daily-hourly-logs.selectors';
import * as fromDailyHourlyLogs from './daily-hourly-logs.reducer';

@Injectable({
  providedIn: 'root',
})
export class DailyHourlyLogsFacade {
  loaded$ = this.store.pipe(
    select(DailyHourlyLogsSelectors.getDailyHourlyLogsLoaded)
  );
  allDailyHourlyLogs$ = this.store.pipe(
    select(DailyHourlyLogsSelectors.getAllDailyHourlyLogs)
  );
  selectedDailyHourlyLog$ = this.store.pipe(
    select(DailyHourlyLogsSelectors.getSelectedDailyHourlyLog)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type ===
          DailyHourlyLogsActions.createDailyHourlyLog({} as any).type ||
        action.type ===
          DailyHourlyLogsActions.updateDailyHourlyLog({} as any).type ||
        action.type ===
          DailyHourlyLogsActions.deleteDailyHourlyLog({} as any).type
    )
  );

  constructor(
    private store: Store<fromDailyHourlyLogs.DailyHourlyLogsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectDailyHourlyLog(selectedId: string) {
    this.dispatch(DailyHourlyLogsActions.selectDailyHourlyLog({ selectedId }));
  }

  loadDailyHourlyLogs() {
    this.dispatch(DailyHourlyLogsActions.loadDailyHourlyLogs());
  }

  loadDailyHourlyLog(dailyHourlyLogId: string) {
    this.dispatch(
      DailyHourlyLogsActions.loadDailyHourlyLog({ dailyHourlyLogId })
    );
  }

  createDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    this.dispatch(
      DailyHourlyLogsActions.createDailyHourlyLog({ dailyHourlyLog })
    );
  }

  updateDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    this.dispatch(
      DailyHourlyLogsActions.updateDailyHourlyLog({ dailyHourlyLog })
    );
  }

  deleteDailyHourlyLog(dailyHourlyLog: DailyHourlyLog) {
    this.dispatch(
      DailyHourlyLogsActions.deleteDailyHourlyLog({ dailyHourlyLog })
    );
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

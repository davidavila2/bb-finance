import { Injectable } from '@angular/core';
import { DailyHourlyLog } from '@bba/api-interfaces';
import { DailyHourlyLogsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';

@Injectable()
export class DailyHourlyLogsEffects {
  @Effect() loadDailyHourlyLogs$ = this.actions$.pipe(
    ofType(DailyHourlyLogsActions.loadDailyHourlyLogs),
    fetch({
      run: (action) =>
        this.dailyHourlyLogsService
          .all()
          .pipe(
            map((dailyHourlyLogs: DailyHourlyLog[]) =>
              DailyHourlyLogsActions.loadDailyHourlyLogsSuccess({
                dailyHourlyLogs,
              })
            )
          ),
      onError: (action, error) =>
        DailyHourlyLogsActions.loadDailyHourlyLogsFailure({ error }),
    })
  );

  @Effect() loadDailyHourlyLog$ = this.actions$.pipe(
    ofType(DailyHourlyLogsActions.loadDailyHourlyLog),
    fetch({
      run: (action) =>
        this.dailyHourlyLogsService
          .find(action.dailyHourlyLogId)
          .pipe(
            map((dailyHourlyLog: DailyHourlyLog) =>
              DailyHourlyLogsActions.loadDailyHourlyLogSuccess({
                dailyHourlyLog,
              })
            )
          ),
      onError: (action, error) =>
        DailyHourlyLogsActions.loadDailyHourlyLogFailure({ error }),
    })
  );

  @Effect() createDailyHourlyLog$ = this.actions$.pipe(
    ofType(DailyHourlyLogsActions.createDailyHourlyLog),
    pessimisticUpdate({
      run: (action) =>
        this.dailyHourlyLogsService
          .create(action.dailyHourlyLog)
          .pipe(
            map((dailyHourlyLog: DailyHourlyLog) =>
              DailyHourlyLogsActions.createDailyHourlyLogSuccess({
                dailyHourlyLog,
              })
            )
          ),
      onError: (action, error) =>
        DailyHourlyLogsActions.createDailyHourlyLogFailure({ error }),
    })
  );

  @Effect() updateDailyHourlyLog$ = this.actions$.pipe(
    ofType(DailyHourlyLogsActions.updateDailyHourlyLog),
    pessimisticUpdate({
      run: (action) =>
        this.dailyHourlyLogsService
          .update(action.dailyHourlyLog)
          .pipe(
            map((dailyHourlyLog: DailyHourlyLog) =>
              DailyHourlyLogsActions.updateDailyHourlyLogSuccess({
                dailyHourlyLog,
              })
            )
          ),
      onError: (action, error) =>
        DailyHourlyLogsActions.updateDailyHourlyLogFailure({ error }),
    })
  );

  @Effect() deleteDailyHourlyLog$ = this.actions$.pipe(
    ofType(DailyHourlyLogsActions.deleteDailyHourlyLog),
    pessimisticUpdate({
      run: (action) =>
        this.dailyHourlyLogsService
          .delete(action.dailyHourlyLog)
          .pipe(
            map((dailyHourlyLog: DailyHourlyLog) =>
              DailyHourlyLogsActions.deleteDailyHourlyLogSuccess({
                dailyHourlyLog,
              })
            )
          ),
      onError: (action, error) =>
        DailyHourlyLogsActions.deleteDailyHourlyLogFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private dailyHourlyLogsService: DailyHourlyLogsService
  ) {}
}

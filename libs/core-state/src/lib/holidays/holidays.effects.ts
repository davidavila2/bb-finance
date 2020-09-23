import { Injectable } from '@angular/core';
import { Holiday } from '@bba/api-interfaces';
import { HolidaysService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as HolidaysActions from './holidays.actions';

@Injectable()
export class HolidaysEffects {
  @Effect() loadHolidays$ = this.actions$.pipe(
    ofType(HolidaysActions.loadHolidays),
    fetch({
      run: (action) =>
        this.holidaysService
          .all()
          .pipe(
            map((holidays: Holiday[]) =>
              HolidaysActions.loadHolidaysSuccess({ holidays })
            )
          ),
      onError: (action, error) =>
        HolidaysActions.loadHolidaysFailure({ error }),
    })
  );

  @Effect() loadHoliday$ = this.actions$.pipe(
    ofType(HolidaysActions.loadHoliday),
    fetch({
      run: (action) =>
        this.holidaysService
          .find(action.holidayId)
          .pipe(
            map((holiday: Holiday) =>
              HolidaysActions.loadHolidaySuccess({ holiday })
            )
          ),
      onError: (action, error) => HolidaysActions.loadHolidayFailure({ error }),
    })
  );

  @Effect() createHoliday$ = this.actions$.pipe(
    ofType(HolidaysActions.createHoliday),
    pessimisticUpdate({
      run: (action) =>
        this.holidaysService
          .create(action.holiday)
          .pipe(
            map((holiday: Holiday) =>
              HolidaysActions.createHolidaySuccess({ holiday })
            )
          ),
      onError: (action, error) =>
        HolidaysActions.createHolidayFailure({ error }),
    })
  );

  @Effect() updateHoliday$ = this.actions$.pipe(
    ofType(HolidaysActions.updateHoliday),
    pessimisticUpdate({
      run: (action) =>
        this.holidaysService
          .update(action.holiday)
          .pipe(
            map((holiday: Holiday) =>
              HolidaysActions.updateHolidaySuccess({ holiday })
            )
          ),
      onError: (action, error) =>
        HolidaysActions.updateHolidayFailure({ error }),
    })
  );

  @Effect() deleteHoliday$ = this.actions$.pipe(
    ofType(HolidaysActions.deleteHoliday),
    pessimisticUpdate({
      run: (action) =>
        this.holidaysService
          .delete(action.holiday)
          .pipe(
            map((holiday: Holiday) =>
              HolidaysActions.deleteHolidaySuccess({ holiday })
            )
          ),
      onError: (action, error) =>
        HolidaysActions.deleteHolidayFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private holidaysService: HolidaysService
  ) {}
}

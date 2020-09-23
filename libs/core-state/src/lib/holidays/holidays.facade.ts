import { Injectable } from '@angular/core';
import { Holiday } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as HolidaysActions from './holidays.actions';
import * as HolidaysSelectors from './holidays.selectors';
import * as fromHolidays from './holidays.reducer';

@Injectable({
  providedIn: 'root',
})
export class HolidaysFacade {
  loaded$ = this.store.pipe(select(HolidaysSelectors.getHolidaysLoaded));
  allHolidays$ = this.store.pipe(select(HolidaysSelectors.getAllHolidays));
  selectedHoliday$ = this.store.pipe(
    select(HolidaysSelectors.getSelectedHoliday)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === HolidaysActions.createHoliday({} as any).type ||
        action.type === HolidaysActions.updateHoliday({} as any).type ||
        action.type === HolidaysActions.deleteHoliday({} as any).type
    )
  );

  constructor(
    private store: Store<fromHolidays.HolidaysPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectHoliday(selectedId: string) {
    this.dispatch(HolidaysActions.selectHoliday({ selectedId }));
  }

  loadHolidays() {
    this.dispatch(HolidaysActions.loadHolidays());
  }

  loadHoliday(holidayId: string) {
    this.dispatch(HolidaysActions.loadHoliday({ holidayId }));
  }

  createHoliday(holiday: Holiday) {
    this.dispatch(HolidaysActions.createHoliday({ holiday }));
  }

  updateHoliday(holiday: Holiday) {
    this.dispatch(HolidaysActions.updateHoliday({ holiday }));
  }

  deleteHoliday(holiday: Holiday) {
    this.dispatch(HolidaysActions.deleteHoliday({ holiday }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

import { Holiday } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as HolidaysActions from './holidays.actions';

export const HOLIDAYS_FEATURE_KEY = 'holidays';

export interface HolidaysState extends EntityState<Holiday> {
  selectedId?: string | number; // which Holidays record has been selected
  loaded: boolean; // has the Holidays list been loaded
  error?: string | null; // last known error (if any)
}

export interface HolidaysPartialState {
  readonly [HOLIDAYS_FEATURE_KEY]: HolidaysState;
}

export const holidaysAdapter: EntityAdapter<Holiday> = createEntityAdapter<
  Holiday
>();

export const initialHolidaysState: HolidaysState = holidaysAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _holidaysReducer = createReducer(
  initialHolidaysState,
  on(HolidaysActions.selectHoliday, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(HolidaysActions.resetSelectedHoliday, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(HolidaysActions.resetHolidays, (state) =>
    holidaysAdapter.removeAll(state)
  ),
  // Load holidays
  on(HolidaysActions.loadHolidays, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(HolidaysActions.loadHolidaysSuccess, (state, { holidays }) =>
    holidaysAdapter.setAll(holidays, { ...state, loaded: true })
  ),
  on(HolidaysActions.loadHolidaysFailure, onFailure),
  // Load holiday
  on(HolidaysActions.loadHoliday, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(HolidaysActions.loadHolidaySuccess, (state, { holiday }) =>
    holidaysAdapter.upsertOne(holiday, { ...state, loaded: true })
  ),
  on(HolidaysActions.loadHolidayFailure, onFailure),
  // Add holiday
  on(HolidaysActions.createHolidaySuccess, (state, { holiday }) =>
    holidaysAdapter.addOne(holiday, state)
  ),
  on(HolidaysActions.createHolidayFailure, onFailure),
  // Update holiday
  on(HolidaysActions.updateHolidaySuccess, (state, { holiday }) =>
    holidaysAdapter.updateOne({ id: holiday.id, changes: holiday }, state)
  ),
  on(HolidaysActions.updateHolidayFailure, onFailure),
  // Delete holiday
  on(HolidaysActions.deleteHolidaySuccess, (state, { holiday }) =>
    holidaysAdapter.removeOne(holiday.id, state)
  ),
  on(HolidaysActions.deleteHolidayFailure, onFailure)
);

export function holidaysReducer(
  state: HolidaysState | undefined,
  action: Action
) {
  return _holidaysReducer(state, action);
}

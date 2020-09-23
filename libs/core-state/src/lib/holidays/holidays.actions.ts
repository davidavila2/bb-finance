import { Holiday } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedHoliday = createAction(
  '[Holidays] Reset Selected Holiday'
);
export const resetHolidays = createAction('[Holidays] Reset Holidays');

// Select Holiday
export const selectHoliday = createAction(
  '[Holidays] Select Holiday',
  props<{ selectedId: string }>()
);

// Load Holidays
export const loadHolidays = createAction('[Holidays] Load Holidays');

export const loadHolidaysSuccess = createAction(
  '[Holidays] Load Holidays Success',
  props<{ holidays: Holiday[] }>()
);

export const loadHolidaysFailure = createAction(
  '[Holidays] Load Holidays Failure',
  props<{ error: any }>()
);

// Load Holiday
export const loadHoliday = createAction(
  '[Holidays] Load Holiday',
  props<{ holidayId: string }>()
);

export const loadHolidaySuccess = createAction(
  '[Holidays] Load Holiday Success',
  props<{ holiday: Holiday }>()
);

export const loadHolidayFailure = createAction(
  '[Holidays] Load Holiday Failure',
  props<{ error: any }>()
);

// Create Holiday
export const createHoliday = createAction(
  '[Holidays] Create Holiday',
  props<{ holiday: Holiday }>()
);

export const createHolidaySuccess = createAction(
  '[Holidays] Create Holiday Success',
  props<{ holiday: Holiday }>()
);

export const createHolidayFailure = createAction(
  '[Holidays] Create Holiday Failure',
  props<{ error: any }>()
);

// Update Holiday
export const updateHoliday = createAction(
  '[Holidays] Update Holiday',
  props<{ holiday: Holiday }>()
);

export const updateHolidaySuccess = createAction(
  '[Holidays] Update Holiday Success',
  props<{ holiday: Holiday }>()
);

export const updateHolidayFailure = createAction(
  '[Holidays] Update Holiday Failure',
  props<{ error: any }>()
);

// Delete Holiday
export const deleteHoliday = createAction(
  '[Holidays] Delete Holiday',
  props<{ holiday: Holiday }>()
);

export const deleteHolidayCancelled = createAction(
  '[Holidays] Delete Holiday Cancelled'
);

export const deleteHolidaySuccess = createAction(
  '[Holidays] Delete Holiday Success',
  props<{ holiday: Holiday }>()
);

export const deleteHolidayFailure = createAction(
  '[Holidays] Delete Holiday Failure',
  props<{ error: any }>()
);

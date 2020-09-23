import { DailyHourlyLog } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Reset Selected DailyHourlyLog'
);
export const resetDailyHourlyLogs = createAction(
  '[DailyHourlyLogs] Reset DailyHourlyLogs'
);

// Select DailyHourlyLog
export const selectDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Select DailyHourlyLog',
  props<{ selectedId: string }>()
);

// Load DailyHourlyLogs
export const loadDailyHourlyLogs = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLogs'
);

export const loadDailyHourlyLogsSuccess = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLogs Success',
  props<{ dailyHourlyLogs: DailyHourlyLog[] }>()
);

export const loadDailyHourlyLogsFailure = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLogs Failure',
  props<{ error: any }>()
);

// Load DailyHourlyLog
export const loadDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLog',
  props<{ dailyHourlyLogId: string }>()
);

export const loadDailyHourlyLogSuccess = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLog Success',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const loadDailyHourlyLogFailure = createAction(
  '[DailyHourlyLogs] Load DailyHourlyLog Failure',
  props<{ error: any }>()
);

// Create DailyHourlyLog
export const createDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Create DailyHourlyLog',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const createDailyHourlyLogSuccess = createAction(
  '[DailyHourlyLogs] Create DailyHourlyLog Success',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const createDailyHourlyLogFailure = createAction(
  '[DailyHourlyLogs] Create DailyHourlyLog Failure',
  props<{ error: any }>()
);

// Update DailyHourlyLog
export const updateDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Update DailyHourlyLog',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const updateDailyHourlyLogSuccess = createAction(
  '[DailyHourlyLogs] Update DailyHourlyLog Success',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const updateDailyHourlyLogFailure = createAction(
  '[DailyHourlyLogs] Update DailyHourlyLog Failure',
  props<{ error: any }>()
);

// Delete DailyHourlyLog
export const deleteDailyHourlyLog = createAction(
  '[DailyHourlyLogs] Delete DailyHourlyLog',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const deleteDailyHourlyLogCancelled = createAction(
  '[DailyHourlyLogs] Delete DailyHourlyLog Cancelled'
);

export const deleteDailyHourlyLogSuccess = createAction(
  '[DailyHourlyLogs] Delete DailyHourlyLog Success',
  props<{ dailyHourlyLog: DailyHourlyLog }>()
);

export const deleteDailyHourlyLogFailure = createAction(
  '[DailyHourlyLogs] Delete DailyHourlyLog Failure',
  props<{ error: any }>()
);

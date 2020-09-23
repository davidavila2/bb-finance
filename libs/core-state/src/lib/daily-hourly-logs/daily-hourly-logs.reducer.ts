import { DailyHourlyLog } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';

export const DAILYHOURLYLOGS_FEATURE_KEY = 'dailyHourlyLogs';

export interface DailyHourlyLogsState extends EntityState<DailyHourlyLog> {
  selectedId?: string | number; // which DailyHourlyLogs record has been selected
  loaded: boolean; // has the DailyHourlyLogs list been loaded
  error?: string | null; // last known error (if any)
}

export interface DailyHourlyLogsPartialState {
  readonly [DAILYHOURLYLOGS_FEATURE_KEY]: DailyHourlyLogsState;
}

export const dailyHourlyLogsAdapter: EntityAdapter<DailyHourlyLog> = createEntityAdapter<
  DailyHourlyLog
>();

export const initialDailyHourlyLogsState: DailyHourlyLogsState = dailyHourlyLogsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _dailyHourlyLogsReducer = createReducer(
  initialDailyHourlyLogsState,
  on(DailyHourlyLogsActions.selectDailyHourlyLog, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(DailyHourlyLogsActions.resetSelectedDailyHourlyLog, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(DailyHourlyLogsActions.resetDailyHourlyLogs, (state) =>
    dailyHourlyLogsAdapter.removeAll(state)
  ),
  // Load dailyHourlyLogs
  on(DailyHourlyLogsActions.loadDailyHourlyLogs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    DailyHourlyLogsActions.loadDailyHourlyLogsSuccess,
    (state, { dailyHourlyLogs }) =>
      dailyHourlyLogsAdapter.setAll(dailyHourlyLogs, { ...state, loaded: true })
  ),
  on(DailyHourlyLogsActions.loadDailyHourlyLogsFailure, onFailure),
  // Load dailyHourlyLog
  on(DailyHourlyLogsActions.loadDailyHourlyLog, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    DailyHourlyLogsActions.loadDailyHourlyLogSuccess,
    (state, { dailyHourlyLog }) =>
      dailyHourlyLogsAdapter.upsertOne(dailyHourlyLog, {
        ...state,
        loaded: true,
      })
  ),
  on(DailyHourlyLogsActions.loadDailyHourlyLogFailure, onFailure),
  // Add dailyHourlyLog
  on(
    DailyHourlyLogsActions.createDailyHourlyLogSuccess,
    (state, { dailyHourlyLog }) =>
      dailyHourlyLogsAdapter.addOne(dailyHourlyLog, state)
  ),
  on(DailyHourlyLogsActions.createDailyHourlyLogFailure, onFailure),
  // Update dailyHourlyLog
  on(
    DailyHourlyLogsActions.updateDailyHourlyLogSuccess,
    (state, { dailyHourlyLog }) =>
      dailyHourlyLogsAdapter.updateOne(
        { id: dailyHourlyLog.id, changes: dailyHourlyLog },
        state
      )
  ),
  on(DailyHourlyLogsActions.updateDailyHourlyLogFailure, onFailure),
  // Delete dailyHourlyLog
  on(
    DailyHourlyLogsActions.deleteDailyHourlyLogSuccess,
    (state, { dailyHourlyLog }) =>
      dailyHourlyLogsAdapter.removeOne(dailyHourlyLog.id, state)
  ),
  on(DailyHourlyLogsActions.deleteDailyHourlyLogFailure, onFailure)
);

export function dailyHourlyLogsReducer(
  state: DailyHourlyLogsState | undefined,
  action: Action
) {
  return _dailyHourlyLogsReducer(state, action);
}

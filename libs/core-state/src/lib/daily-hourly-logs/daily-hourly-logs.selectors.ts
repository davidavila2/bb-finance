import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DAILYHOURLYLOGS_FEATURE_KEY,
  DailyHourlyLogsState,
  dailyHourlyLogsAdapter,
} from './daily-hourly-logs.reducer';

// Lookup the 'DailyHourlyLogs' feature state managed by NgRx
export const getDailyHourlyLogsState = createFeatureSelector<
  DailyHourlyLogsState
>(DAILYHOURLYLOGS_FEATURE_KEY);

const { selectAll, selectEntities } = dailyHourlyLogsAdapter.getSelectors();

export const getDailyHourlyLogsLoaded = createSelector(
  getDailyHourlyLogsState,
  (state: DailyHourlyLogsState) => state.loaded
);

export const getDailyHourlyLogsError = createSelector(
  getDailyHourlyLogsState,
  (state: DailyHourlyLogsState) => state.error
);

export const getAllDailyHourlyLogs = createSelector(
  getDailyHourlyLogsState,
  (state: DailyHourlyLogsState) => selectAll(state)
);

export const getDailyHourlyLogsEntities = createSelector(
  getDailyHourlyLogsState,
  (state: DailyHourlyLogsState) => selectEntities(state)
);

export const getSelectedDailyHourlyLogId = createSelector(
  getDailyHourlyLogsState,
  (state: DailyHourlyLogsState) => state.selectedId
);

export const getSelectedDailyHourlyLog = createSelector(
  getDailyHourlyLogsEntities,
  getSelectedDailyHourlyLogId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

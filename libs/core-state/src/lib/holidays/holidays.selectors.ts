import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HOLIDAYS_FEATURE_KEY,
  HolidaysState,
  holidaysAdapter,
} from './holidays.reducer';

// Lookup the 'Holidays' feature state managed by NgRx
export const getHolidaysState = createFeatureSelector<HolidaysState>(
  HOLIDAYS_FEATURE_KEY
);

const { selectAll, selectEntities } = holidaysAdapter.getSelectors();

export const getHolidaysLoaded = createSelector(
  getHolidaysState,
  (state: HolidaysState) => state.loaded
);

export const getHolidaysError = createSelector(
  getHolidaysState,
  (state: HolidaysState) => state.error
);

export const getAllHolidays = createSelector(
  getHolidaysState,
  (state: HolidaysState) => selectAll(state)
);

export const getHolidaysEntities = createSelector(
  getHolidaysState,
  (state: HolidaysState) => selectEntities(state)
);

export const getSelectedHolidayId = createSelector(
  getHolidaysState,
  (state: HolidaysState) => state.selectedId
);

export const getSelectedHoliday = createSelector(
  getHolidaysEntities,
  getSelectedHolidayId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

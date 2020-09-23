import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TSHEETSEXTRACTS_FEATURE_KEY,
  TsheetsExtractsState,
  tsheetsExtractsAdapter,
} from './tsheets-extracts.reducer';

// Lookup the 'TsheetsExtracts' feature state managed by NgRx
export const getTsheetsExtractsState = createFeatureSelector<
  TsheetsExtractsState
>(TSHEETSEXTRACTS_FEATURE_KEY);

const { selectAll, selectEntities } = tsheetsExtractsAdapter.getSelectors();

export const getTsheetsExtractsLoaded = createSelector(
  getTsheetsExtractsState,
  (state: TsheetsExtractsState) => state.loaded
);

export const getTsheetsExtractsError = createSelector(
  getTsheetsExtractsState,
  (state: TsheetsExtractsState) => state.error
);

export const getAllTsheetsExtracts = createSelector(
  getTsheetsExtractsState,
  (state: TsheetsExtractsState) => selectAll(state)
);

export const getTsheetsExtractsEntities = createSelector(
  getTsheetsExtractsState,
  (state: TsheetsExtractsState) => selectEntities(state)
);

export const getSelectedTsheetsExtractId = createSelector(
  getTsheetsExtractsState,
  (state: TsheetsExtractsState) => state.selectedId
);

export const getSelectedTsheetsExtract = createSelector(
  getTsheetsExtractsEntities,
  getSelectedTsheetsExtractId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

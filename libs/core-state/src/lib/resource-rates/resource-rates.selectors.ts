import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RESOURCERATES_FEATURE_KEY,
  ResourceRatesState,
  resourceRatesAdapter,
} from './resource-rates.reducer';

// Lookup the 'ResourceRates' feature state managed by NgRx
export const getResourceRatesState = createFeatureSelector<ResourceRatesState>(
  RESOURCERATES_FEATURE_KEY
);

const { selectAll, selectEntities } = resourceRatesAdapter.getSelectors();

export const getResourceRatesLoaded = createSelector(
  getResourceRatesState,
  (state: ResourceRatesState) => state.loaded
);

export const getResourceRatesError = createSelector(
  getResourceRatesState,
  (state: ResourceRatesState) => state.error
);

export const getAllResourceRates = createSelector(
  getResourceRatesState,
  (state: ResourceRatesState) => selectAll(state)
);

export const getResourceRatesEntities = createSelector(
  getResourceRatesState,
  (state: ResourceRatesState) => selectEntities(state)
);

export const getSelectedResourceRateId = createSelector(
  getResourceRatesState,
  (state: ResourceRatesState) => state.selectedId
);

export const getSelectedResourceRate = createSelector(
  getResourceRatesEntities,
  getSelectedResourceRateId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

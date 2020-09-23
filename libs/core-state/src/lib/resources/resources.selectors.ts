import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RESOURCES_FEATURE_KEY,
  ResourcesState,
  resourcesAdapter,
} from './resources.reducer';

// Lookup the 'Resources' feature state managed by NgRx
export const getResourcesState = createFeatureSelector<ResourcesState>(
  RESOURCES_FEATURE_KEY
);

const { selectAll, selectEntities } = resourcesAdapter.getSelectors();

export const getResourcesLoaded = createSelector(
  getResourcesState,
  (state: ResourcesState) => state.loaded
);

export const getResourcesError = createSelector(
  getResourcesState,
  (state: ResourcesState) => state.error
);

export const getAllResources = createSelector(
  getResourcesState,
  (state: ResourcesState) => selectAll(state)
);

export const getResourcesEntities = createSelector(
  getResourcesState,
  (state: ResourcesState) => selectEntities(state)
);

export const getSelectedResourceId = createSelector(
  getResourcesState,
  (state: ResourcesState) => state.selectedId
);

export const getSelectedResource = createSelector(
  getResourcesEntities,
  getSelectedResourceId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

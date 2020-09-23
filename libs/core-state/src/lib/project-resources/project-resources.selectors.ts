import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROJECTRESOURCES_FEATURE_KEY,
  ProjectResourcesState,
  projectResourcesAdapter,
} from './project-resources.reducer';

// Lookup the 'ProjectResources' feature state managed by NgRx
export const getProjectResourcesState = createFeatureSelector<
  ProjectResourcesState
>(PROJECTRESOURCES_FEATURE_KEY);

const { selectAll, selectEntities } = projectResourcesAdapter.getSelectors();

export const getProjectResourcesLoaded = createSelector(
  getProjectResourcesState,
  (state: ProjectResourcesState) => state.loaded
);

export const getProjectResourcesError = createSelector(
  getProjectResourcesState,
  (state: ProjectResourcesState) => state.error
);

export const getAllProjectResources = createSelector(
  getProjectResourcesState,
  (state: ProjectResourcesState) => selectAll(state)
);

export const getProjectResourcesEntities = createSelector(
  getProjectResourcesState,
  (state: ProjectResourcesState) => selectEntities(state)
);

export const getSelectedProjectResourceId = createSelector(
  getProjectResourcesState,
  (state: ProjectResourcesState) => state.selectedId
);

export const getSelectedProjectResource = createSelector(
  getProjectResourcesEntities,
  getSelectedProjectResourceId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

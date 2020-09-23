import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PTOREQUESTS_FEATURE_KEY,
  PtoRequestsState,
  ptoRequestsAdapter,
} from './pto-requests.reducer';

// Lookup the 'PtoRequests' feature state managed by NgRx
export const getPtoRequestsState = createFeatureSelector<PtoRequestsState>(
  PTOREQUESTS_FEATURE_KEY
);

const { selectAll, selectEntities } = ptoRequestsAdapter.getSelectors();

export const getPtoRequestsLoaded = createSelector(
  getPtoRequestsState,
  (state: PtoRequestsState) => state.loaded
);

export const getPtoRequestsError = createSelector(
  getPtoRequestsState,
  (state: PtoRequestsState) => state.error
);

export const getAllPtoRequests = createSelector(
  getPtoRequestsState,
  (state: PtoRequestsState) => selectAll(state)
);

export const getPtoRequestsEntities = createSelector(
  getPtoRequestsState,
  (state: PtoRequestsState) => selectEntities(state)
);

export const getSelectedPtoRequestId = createSelector(
  getPtoRequestsState,
  (state: PtoRequestsState) => state.selectedId
);

export const getSelectedPtoRequest = createSelector(
  getPtoRequestsEntities,
  getSelectedPtoRequestId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CLIENTS_FEATURE_KEY,
  ClientsState,
  clientsAdapter,
} from './clients.reducer';

// Lookup the 'Clients' feature state managed by NgRx
export const getClientsState = createFeatureSelector<ClientsState>(
  CLIENTS_FEATURE_KEY
);

const { selectAll, selectEntities } = clientsAdapter.getSelectors();

export const getClientsLoaded = createSelector(
  getClientsState,
  (state: ClientsState) => state.loaded
);

export const getClientsError = createSelector(
  getClientsState,
  (state: ClientsState) => state.error
);

export const getAllClients = createSelector(
  getClientsState,
  (state: ClientsState) => selectAll(state)
);

export const getClientsEntities = createSelector(
  getClientsState,
  (state: ClientsState) => selectEntities(state)
);

export const getSelectedClientId = createSelector(
  getClientsState,
  (state: ClientsState) => state.selectedId
);

export const getSelectedClient = createSelector(
  getClientsEntities,
  getSelectedClientId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

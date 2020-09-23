import { Client } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ClientsActions from './clients.actions';

export const CLIENTS_FEATURE_KEY = 'clients';

export interface ClientsState extends EntityState<Client> {
  selectedId?: string | number; // which Clients record has been selected
  loaded: boolean; // has the Clients list been loaded
  error?: string | null; // last known error (if any)
}

export interface ClientsPartialState {
  readonly [CLIENTS_FEATURE_KEY]: ClientsState;
}

export const clientsAdapter: EntityAdapter<Client> = createEntityAdapter<
  Client
>();

export const initialClientsState: ClientsState = clientsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _clientsReducer = createReducer(
  initialClientsState,
  on(ClientsActions.selectClient, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(ClientsActions.resetSelectedClient, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(ClientsActions.resetClients, (state) => clientsAdapter.removeAll(state)),
  // Load clients
  on(ClientsActions.loadClients, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ClientsActions.loadClientsSuccess, (state, { clients }) =>
    clientsAdapter.setAll(clients, { ...state, loaded: true })
  ),
  on(ClientsActions.loadClientsFailure, onFailure),
  // Load client
  on(ClientsActions.loadClient, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ClientsActions.loadClientSuccess, (state, { client }) =>
    clientsAdapter.upsertOne(client, { ...state, loaded: true })
  ),
  on(ClientsActions.loadClientFailure, onFailure),
  // Add client
  on(ClientsActions.createClientSuccess, (state, { client }) =>
    clientsAdapter.addOne(client, state)
  ),
  on(ClientsActions.createClientFailure, onFailure),
  // Update client
  on(ClientsActions.updateClientSuccess, (state, { client }) =>
    clientsAdapter.updateOne({ id: client.id, changes: client }, state)
  ),
  on(ClientsActions.updateClientFailure, onFailure),
  // Delete client
  on(ClientsActions.deleteClientSuccess, (state, { client }) =>
    clientsAdapter.removeOne(client.id, state)
  ),
  on(ClientsActions.deleteClientFailure, onFailure)
);

export function clientsReducer(
  state: ClientsState | undefined,
  action: Action
) {
  return _clientsReducer(state, action);
}

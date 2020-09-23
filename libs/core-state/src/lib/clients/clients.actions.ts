import { Client } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedClient = createAction(
  '[Clients] Reset Selected Client'
);
export const resetClients = createAction('[Clients] Reset Clients');

// Select Client
export const selectClient = createAction(
  '[Clients] Select Client',
  props<{ selectedId: string }>()
);

// Load Clients
export const loadClients = createAction('[Clients] Load Clients');

export const loadClientsSuccess = createAction(
  '[Clients] Load Clients Success',
  props<{ clients: Client[] }>()
);

export const loadClientsFailure = createAction(
  '[Clients] Load Clients Failure',
  props<{ error: any }>()
);

// Load Client
export const loadClient = createAction(
  '[Clients] Load Client',
  props<{ clientId: string }>()
);

export const loadClientSuccess = createAction(
  '[Clients] Load Client Success',
  props<{ client: Client }>()
);

export const loadClientFailure = createAction(
  '[Clients] Load Client Failure',
  props<{ error: any }>()
);

// Create Client
export const createClient = createAction(
  '[Clients] Create Client',
  props<{ client: Client }>()
);

export const createClientSuccess = createAction(
  '[Clients] Create Client Success',
  props<{ client: Client }>()
);

export const createClientFailure = createAction(
  '[Clients] Create Client Failure',
  props<{ error: any }>()
);

// Update Client
export const updateClient = createAction(
  '[Clients] Update Client',
  props<{ client: Client }>()
);

export const updateClientSuccess = createAction(
  '[Clients] Update Client Success',
  props<{ client: Client }>()
);

export const updateClientFailure = createAction(
  '[Clients] Update Client Failure',
  props<{ error: any }>()
);

// Delete Client
export const deleteClient = createAction(
  '[Clients] Delete Client',
  props<{ client: Client }>()
);

export const deleteClientCancelled = createAction(
  '[Clients] Delete Client Cancelled'
);

export const deleteClientSuccess = createAction(
  '[Clients] Delete Client Success',
  props<{ client: Client }>()
);

export const deleteClientFailure = createAction(
  '[Clients] Delete Client Failure',
  props<{ error: any }>()
);

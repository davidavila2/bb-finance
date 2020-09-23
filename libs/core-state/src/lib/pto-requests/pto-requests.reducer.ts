import { PtoRequest } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as PtoRequestsActions from './pto-requests.actions';

export const PTOREQUESTS_FEATURE_KEY = 'ptoRequests';

export interface PtoRequestsState extends EntityState<PtoRequest> {
  selectedId?: string | number; // which PtoRequests record has been selected
  loaded: boolean; // has the PtoRequests list been loaded
  error?: string | null; // last known error (if any)
}

export interface PtoRequestsPartialState {
  readonly [PTOREQUESTS_FEATURE_KEY]: PtoRequestsState;
}

export const ptoRequestsAdapter: EntityAdapter<PtoRequest> = createEntityAdapter<
  PtoRequest
>();

export const initialPtoRequestsState: PtoRequestsState = ptoRequestsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _ptoRequestsReducer = createReducer(
  initialPtoRequestsState,
  on(PtoRequestsActions.selectPtoRequest, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(PtoRequestsActions.resetSelectedPtoRequest, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(PtoRequestsActions.resetPtoRequests, (state) =>
    ptoRequestsAdapter.removeAll(state)
  ),
  // Load ptoRequests
  on(PtoRequestsActions.loadPtoRequests, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PtoRequestsActions.loadPtoRequestsSuccess, (state, { ptoRequests }) =>
    ptoRequestsAdapter.setAll(ptoRequests, { ...state, loaded: true })
  ),
  on(PtoRequestsActions.loadPtoRequestsFailure, onFailure),
  // Load ptoRequest
  on(PtoRequestsActions.loadPtoRequest, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PtoRequestsActions.loadPtoRequestSuccess, (state, { ptoRequest }) =>
    ptoRequestsAdapter.upsertOne(ptoRequest, { ...state, loaded: true })
  ),
  on(PtoRequestsActions.loadPtoRequestFailure, onFailure),
  // Add ptoRequest
  on(PtoRequestsActions.createPtoRequestSuccess, (state, { ptoRequest }) =>
    ptoRequestsAdapter.addOne(ptoRequest, state)
  ),
  on(PtoRequestsActions.createPtoRequestFailure, onFailure),
  // Update ptoRequest
  on(PtoRequestsActions.updatePtoRequestSuccess, (state, { ptoRequest }) =>
    ptoRequestsAdapter.updateOne(
      { id: ptoRequest.id, changes: ptoRequest },
      state
    )
  ),
  on(PtoRequestsActions.updatePtoRequestFailure, onFailure),
  // Delete ptoRequest
  on(PtoRequestsActions.deletePtoRequestSuccess, (state, { ptoRequest }) =>
    ptoRequestsAdapter.removeOne(ptoRequest.id, state)
  ),
  on(PtoRequestsActions.deletePtoRequestFailure, onFailure)
);

export function ptoRequestsReducer(
  state: PtoRequestsState | undefined,
  action: Action
) {
  return _ptoRequestsReducer(state, action);
}

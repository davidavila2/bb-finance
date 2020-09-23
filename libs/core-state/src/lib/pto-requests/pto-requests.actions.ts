import { PtoRequest } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedPtoRequest = createAction(
  '[PtoRequests] Reset Selected PtoRequest'
);
export const resetPtoRequests = createAction('[PtoRequests] Reset PtoRequests');

// Select PtoRequest
export const selectPtoRequest = createAction(
  '[PtoRequests] Select PtoRequest',
  props<{ selectedId: string }>()
);

// Load PtoRequests
export const loadPtoRequests = createAction('[PtoRequests] Load PtoRequests');

export const loadPtoRequestsSuccess = createAction(
  '[PtoRequests] Load PtoRequests Success',
  props<{ ptoRequests: PtoRequest[] }>()
);

export const loadPtoRequestsFailure = createAction(
  '[PtoRequests] Load PtoRequests Failure',
  props<{ error: any }>()
);

// Load PtoRequest
export const loadPtoRequest = createAction(
  '[PtoRequests] Load PtoRequest',
  props<{ ptoRequestId: string }>()
);

export const loadPtoRequestSuccess = createAction(
  '[PtoRequests] Load PtoRequest Success',
  props<{ ptoRequest: PtoRequest }>()
);

export const loadPtoRequestFailure = createAction(
  '[PtoRequests] Load PtoRequest Failure',
  props<{ error: any }>()
);

// Create PtoRequest
export const createPtoRequest = createAction(
  '[PtoRequests] Create PtoRequest',
  props<{ ptoRequest: PtoRequest }>()
);

export const createPtoRequestSuccess = createAction(
  '[PtoRequests] Create PtoRequest Success',
  props<{ ptoRequest: PtoRequest }>()
);

export const createPtoRequestFailure = createAction(
  '[PtoRequests] Create PtoRequest Failure',
  props<{ error: any }>()
);

// Update PtoRequest
export const updatePtoRequest = createAction(
  '[PtoRequests] Update PtoRequest',
  props<{ ptoRequest: PtoRequest }>()
);

export const updatePtoRequestSuccess = createAction(
  '[PtoRequests] Update PtoRequest Success',
  props<{ ptoRequest: PtoRequest }>()
);

export const updatePtoRequestFailure = createAction(
  '[PtoRequests] Update PtoRequest Failure',
  props<{ error: any }>()
);

// Delete PtoRequest
export const deletePtoRequest = createAction(
  '[PtoRequests] Delete PtoRequest',
  props<{ ptoRequest: PtoRequest }>()
);

export const deletePtoRequestCancelled = createAction(
  '[PtoRequests] Delete PtoRequest Cancelled'
);

export const deletePtoRequestSuccess = createAction(
  '[PtoRequests] Delete PtoRequest Success',
  props<{ ptoRequest: PtoRequest }>()
);

export const deletePtoRequestFailure = createAction(
  '[PtoRequests] Delete PtoRequest Failure',
  props<{ error: any }>()
);

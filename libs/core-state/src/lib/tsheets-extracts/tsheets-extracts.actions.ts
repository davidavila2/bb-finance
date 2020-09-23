import { TsheetsExtract } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedTsheetsExtract = createAction(
  '[TsheetsExtracts] Reset Selected TsheetsExtract'
);
export const resetTsheetsExtracts = createAction(
  '[TsheetsExtracts] Reset TsheetsExtracts'
);

// Select TsheetsExtract
export const selectTsheetsExtract = createAction(
  '[TsheetsExtracts] Select TsheetsExtract',
  props<{ selectedId: string }>()
);

// Load TsheetsExtracts
export const loadTsheetsExtracts = createAction(
  '[TsheetsExtracts] Load TsheetsExtracts'
);

export const loadTsheetsExtractsSuccess = createAction(
  '[TsheetsExtracts] Load TsheetsExtracts Success',
  props<{ tsheetsExtracts: TsheetsExtract[] }>()
);

export const loadTsheetsExtractsFailure = createAction(
  '[TsheetsExtracts] Load TsheetsExtracts Failure',
  props<{ error: any }>()
);

// Load TsheetsExtract
export const loadTsheetsExtract = createAction(
  '[TsheetsExtracts] Load TsheetsExtract',
  props<{ tsheetsExtractId: string }>()
);

export const loadTsheetsExtractSuccess = createAction(
  '[TsheetsExtracts] Load TsheetsExtract Success',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const loadTsheetsExtractFailure = createAction(
  '[TsheetsExtracts] Load TsheetsExtract Failure',
  props<{ error: any }>()
);

// Create TsheetsExtract
export const createTsheetsExtract = createAction(
  '[TsheetsExtracts] Create TsheetsExtract',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const createTsheetsExtractSuccess = createAction(
  '[TsheetsExtracts] Create TsheetsExtract Success',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const createTsheetsExtractFailure = createAction(
  '[TsheetsExtracts] Create TsheetsExtract Failure',
  props<{ error: any }>()
);

// Update TsheetsExtract
export const updateTsheetsExtract = createAction(
  '[TsheetsExtracts] Update TsheetsExtract',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const updateTsheetsExtractSuccess = createAction(
  '[TsheetsExtracts] Update TsheetsExtract Success',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const updateTsheetsExtractFailure = createAction(
  '[TsheetsExtracts] Update TsheetsExtract Failure',
  props<{ error: any }>()
);

// Delete TsheetsExtract
export const deleteTsheetsExtract = createAction(
  '[TsheetsExtracts] Delete TsheetsExtract',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const deleteTsheetsExtractCancelled = createAction(
  '[TsheetsExtracts] Delete TsheetsExtract Cancelled'
);

export const deleteTsheetsExtractSuccess = createAction(
  '[TsheetsExtracts] Delete TsheetsExtract Success',
  props<{ tsheetsExtract: TsheetsExtract }>()
);

export const deleteTsheetsExtractFailure = createAction(
  '[TsheetsExtracts] Delete TsheetsExtract Failure',
  props<{ error: any }>()
);

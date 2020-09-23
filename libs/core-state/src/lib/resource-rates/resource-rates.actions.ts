import { ResourceRate } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedResourceRate = createAction(
  '[ResourceRates] Reset Selected ResourceRate'
);
export const resetResourceRates = createAction(
  '[ResourceRates] Reset ResourceRates'
);

// Select ResourceRate
export const selectResourceRate = createAction(
  '[ResourceRates] Select ResourceRate',
  props<{ selectedId: string }>()
);

// Load ResourceRates
export const loadResourceRates = createAction(
  '[ResourceRates] Load ResourceRates'
);

export const loadResourceRatesSuccess = createAction(
  '[ResourceRates] Load ResourceRates Success',
  props<{ resourceRates: ResourceRate[] }>()
);

export const loadResourceRatesFailure = createAction(
  '[ResourceRates] Load ResourceRates Failure',
  props<{ error: any }>()
);

// Load ResourceRate
export const loadResourceRate = createAction(
  '[ResourceRates] Load ResourceRate',
  props<{ resourceRateId: string }>()
);

export const loadResourceRateSuccess = createAction(
  '[ResourceRates] Load ResourceRate Success',
  props<{ resourceRate: ResourceRate }>()
);

export const loadResourceRateFailure = createAction(
  '[ResourceRates] Load ResourceRate Failure',
  props<{ error: any }>()
);

// Create ResourceRate
export const createResourceRate = createAction(
  '[ResourceRates] Create ResourceRate',
  props<{ resourceRate: ResourceRate }>()
);

export const createResourceRateSuccess = createAction(
  '[ResourceRates] Create ResourceRate Success',
  props<{ resourceRate: ResourceRate }>()
);

export const createResourceRateFailure = createAction(
  '[ResourceRates] Create ResourceRate Failure',
  props<{ error: any }>()
);

// Update ResourceRate
export const updateResourceRate = createAction(
  '[ResourceRates] Update ResourceRate',
  props<{ resourceRate: ResourceRate }>()
);

export const updateResourceRateSuccess = createAction(
  '[ResourceRates] Update ResourceRate Success',
  props<{ resourceRate: ResourceRate }>()
);

export const updateResourceRateFailure = createAction(
  '[ResourceRates] Update ResourceRate Failure',
  props<{ error: any }>()
);

// Delete ResourceRate
export const deleteResourceRate = createAction(
  '[ResourceRates] Delete ResourceRate',
  props<{ resourceRate: ResourceRate }>()
);

export const deleteResourceRateCancelled = createAction(
  '[ResourceRates] Delete ResourceRate Cancelled'
);

export const deleteResourceRateSuccess = createAction(
  '[ResourceRates] Delete ResourceRate Success',
  props<{ resourceRate: ResourceRate }>()
);

export const deleteResourceRateFailure = createAction(
  '[ResourceRates] Delete ResourceRate Failure',
  props<{ error: any }>()
);

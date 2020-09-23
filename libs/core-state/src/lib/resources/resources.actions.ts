import { Resource } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedResource = createAction(
  '[Resources] Reset Selected Resource'
);
export const resetResources = createAction('[Resources] Reset Resources');

// Select Resource
export const selectResource = createAction(
  '[Resources] Select Resource',
  props<{ selectedId: string }>()
);

// Load Resources
export const loadResources = createAction('[Resources] Load Resources');

export const loadResourcesSuccess = createAction(
  '[Resources] Load Resources Success',
  props<{ resources: Resource[] }>()
);

export const loadResourcesFailure = createAction(
  '[Resources] Load Resources Failure',
  props<{ error: any }>()
);

// Load Resource
export const loadResource = createAction(
  '[Resources] Load Resource',
  props<{ resourceId: string }>()
);

export const loadResourceSuccess = createAction(
  '[Resources] Load Resource Success',
  props<{ resource: Resource }>()
);

export const loadResourceFailure = createAction(
  '[Resources] Load Resource Failure',
  props<{ error: any }>()
);

// Create Resource
export const createResource = createAction(
  '[Resources] Create Resource',
  props<{ resource: Resource }>()
);

export const createResourceSuccess = createAction(
  '[Resources] Create Resource Success',
  props<{ resource: Resource }>()
);

export const createResourceFailure = createAction(
  '[Resources] Create Resource Failure',
  props<{ error: any }>()
);

// Update Resource
export const updateResource = createAction(
  '[Resources] Update Resource',
  props<{ resource: Resource }>()
);

export const updateResourceSuccess = createAction(
  '[Resources] Update Resource Success',
  props<{ resource: Resource }>()
);

export const updateResourceFailure = createAction(
  '[Resources] Update Resource Failure',
  props<{ error: any }>()
);

// Delete Resource
export const deleteResource = createAction(
  '[Resources] Delete Resource',
  props<{ resource: Resource }>()
);

export const deleteResourceCancelled = createAction(
  '[Resources] Delete Resource Cancelled'
);

export const deleteResourceSuccess = createAction(
  '[Resources] Delete Resource Success',
  props<{ resource: Resource }>()
);

export const deleteResourceFailure = createAction(
  '[Resources] Delete Resource Failure',
  props<{ error: any }>()
);

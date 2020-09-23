import { ProjectResource } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedProjectResource = createAction(
  '[ProjectResources] Reset Selected ProjectResource'
);
export const resetProjectResources = createAction(
  '[ProjectResources] Reset ProjectResources'
);

// Select ProjectResource
export const selectProjectResource = createAction(
  '[ProjectResources] Select ProjectResource',
  props<{ selectedId: string }>()
);

// Load ProjectResources
export const loadProjectResources = createAction(
  '[ProjectResources] Load ProjectResources'
);

export const loadProjectResourcesSuccess = createAction(
  '[ProjectResources] Load ProjectResources Success',
  props<{ projectResources: ProjectResource[] }>()
);

export const loadProjectResourcesFailure = createAction(
  '[ProjectResources] Load ProjectResources Failure',
  props<{ error: any }>()
);

// Load ProjectResource
export const loadProjectResource = createAction(
  '[ProjectResources] Load ProjectResource',
  props<{ projectResourceId: string }>()
);

export const loadProjectResourceSuccess = createAction(
  '[ProjectResources] Load ProjectResource Success',
  props<{ projectResource: ProjectResource }>()
);

export const loadProjectResourceFailure = createAction(
  '[ProjectResources] Load ProjectResource Failure',
  props<{ error: any }>()
);

// Create ProjectResource
export const createProjectResource = createAction(
  '[ProjectResources] Create ProjectResource',
  props<{ projectResource: ProjectResource }>()
);

export const createProjectResourceSuccess = createAction(
  '[ProjectResources] Create ProjectResource Success',
  props<{ projectResource: ProjectResource }>()
);

export const createProjectResourceFailure = createAction(
  '[ProjectResources] Create ProjectResource Failure',
  props<{ error: any }>()
);

// Update ProjectResource
export const updateProjectResource = createAction(
  '[ProjectResources] Update ProjectResource',
  props<{ projectResource: ProjectResource }>()
);

export const updateProjectResourceSuccess = createAction(
  '[ProjectResources] Update ProjectResource Success',
  props<{ projectResource: ProjectResource }>()
);

export const updateProjectResourceFailure = createAction(
  '[ProjectResources] Update ProjectResource Failure',
  props<{ error: any }>()
);

// Delete ProjectResource
export const deleteProjectResource = createAction(
  '[ProjectResources] Delete ProjectResource',
  props<{ projectResource: ProjectResource }>()
);

export const deleteProjectResourceCancelled = createAction(
  '[ProjectResources] Delete ProjectResource Cancelled'
);

export const deleteProjectResourceSuccess = createAction(
  '[ProjectResources] Delete ProjectResource Success',
  props<{ projectResource: ProjectResource }>()
);

export const deleteProjectResourceFailure = createAction(
  '[ProjectResources] Delete ProjectResource Failure',
  props<{ error: any }>()
);

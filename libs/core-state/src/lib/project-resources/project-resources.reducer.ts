import { ProjectResource } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ProjectResourcesActions from './project-resources.actions';

export const PROJECTRESOURCES_FEATURE_KEY = 'projectResources';

export interface ProjectResourcesState extends EntityState<ProjectResource> {
  selectedId?: string | number; // which ProjectResources record has been selected
  loaded: boolean; // has the ProjectResources list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProjectResourcesPartialState {
  readonly [PROJECTRESOURCES_FEATURE_KEY]: ProjectResourcesState;
}

export const projectResourcesAdapter: EntityAdapter<ProjectResource> = createEntityAdapter<
  ProjectResource
>();

export const initialProjectResourcesState: ProjectResourcesState = projectResourcesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _projectResourcesReducer = createReducer(
  initialProjectResourcesState,
  on(ProjectResourcesActions.selectProjectResource, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(ProjectResourcesActions.resetSelectedProjectResource, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(ProjectResourcesActions.resetProjectResources, (state) =>
    projectResourcesAdapter.removeAll(state)
  ),
  // Load projectResources
  on(ProjectResourcesActions.loadProjectResources, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ProjectResourcesActions.loadProjectResourcesSuccess,
    (state, { projectResources }) =>
      projectResourcesAdapter.setAll(projectResources, {
        ...state,
        loaded: true,
      })
  ),
  on(ProjectResourcesActions.loadProjectResourcesFailure, onFailure),
  // Load projectResource
  on(ProjectResourcesActions.loadProjectResource, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ProjectResourcesActions.loadProjectResourceSuccess,
    (state, { projectResource }) =>
      projectResourcesAdapter.upsertOne(projectResource, {
        ...state,
        loaded: true,
      })
  ),
  on(ProjectResourcesActions.loadProjectResourceFailure, onFailure),
  // Add projectResource
  on(
    ProjectResourcesActions.createProjectResourceSuccess,
    (state, { projectResource }) =>
      projectResourcesAdapter.addOne(projectResource, state)
  ),
  on(ProjectResourcesActions.createProjectResourceFailure, onFailure),
  // Update projectResource
  on(
    ProjectResourcesActions.updateProjectResourceSuccess,
    (state, { projectResource }) =>
      projectResourcesAdapter.updateOne(
        { id: projectResource.id, changes: projectResource },
        state
      )
  ),
  on(ProjectResourcesActions.updateProjectResourceFailure, onFailure),
  // Delete projectResource
  on(
    ProjectResourcesActions.deleteProjectResourceSuccess,
    (state, { projectResource }) =>
      projectResourcesAdapter.removeOne(projectResource.id, state)
  ),
  on(ProjectResourcesActions.deleteProjectResourceFailure, onFailure)
);

export function projectResourcesReducer(
  state: ProjectResourcesState | undefined,
  action: Action
) {
  return _projectResourcesReducer(state, action);
}

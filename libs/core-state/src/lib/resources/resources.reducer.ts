import { Resource } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ResourcesActions from './resources.actions';

export const RESOURCES_FEATURE_KEY = 'resources';

export interface ResourcesState extends EntityState<Resource> {
  selectedId?: string | number; // which Resources record has been selected
  loaded: boolean; // has the Resources list been loaded
  error?: string | null; // last known error (if any)
}

export interface ResourcesPartialState {
  readonly [RESOURCES_FEATURE_KEY]: ResourcesState;
}

export const resourcesAdapter: EntityAdapter<Resource> = createEntityAdapter<
  Resource
>();

export const initialResourcesState: ResourcesState = resourcesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _resourcesReducer = createReducer(
  initialResourcesState,
  on(ResourcesActions.selectResource, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(ResourcesActions.resetSelectedResource, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(ResourcesActions.resetResources, (state) =>
    resourcesAdapter.removeAll(state)
  ),
  // Load resources
  on(ResourcesActions.loadResources, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ResourcesActions.loadResourcesSuccess, (state, { resources }) =>
    resourcesAdapter.setAll(resources, { ...state, loaded: true })
  ),
  on(ResourcesActions.loadResourcesFailure, onFailure),
  // Load resource
  on(ResourcesActions.loadResource, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ResourcesActions.loadResourceSuccess, (state, { resource }) =>
    resourcesAdapter.upsertOne(resource, { ...state, loaded: true })
  ),
  on(ResourcesActions.loadResourceFailure, onFailure),
  // Add resource
  on(ResourcesActions.createResourceSuccess, (state, { resource }) =>
    resourcesAdapter.addOne(resource, state)
  ),
  on(ResourcesActions.createResourceFailure, onFailure),
  // Update resource
  on(ResourcesActions.updateResourceSuccess, (state, { resource }) =>
    resourcesAdapter.updateOne({ id: resource.id, changes: resource }, state)
  ),
  on(ResourcesActions.updateResourceFailure, onFailure),
  // Delete resource
  on(ResourcesActions.deleteResourceSuccess, (state, { resource }) =>
    resourcesAdapter.removeOne(resource.id, state)
  ),
  on(ResourcesActions.deleteResourceFailure, onFailure)
);

export function resourcesReducer(
  state: ResourcesState | undefined,
  action: Action
) {
  return _resourcesReducer(state, action);
}

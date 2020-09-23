import { ResourceRate } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ResourceRatesActions from './resource-rates.actions';

export const RESOURCERATES_FEATURE_KEY = 'resourceRates';

export interface ResourceRatesState extends EntityState<ResourceRate> {
  selectedId?: string | number; // which ResourceRates record has been selected
  loaded: boolean; // has the ResourceRates list been loaded
  error?: string | null; // last known error (if any)
}

export interface ResourceRatesPartialState {
  readonly [RESOURCERATES_FEATURE_KEY]: ResourceRatesState;
}

export const resourceRatesAdapter: EntityAdapter<ResourceRate> = createEntityAdapter<
  ResourceRate
>();

export const initialResourceRatesState: ResourceRatesState = resourceRatesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _resourceRatesReducer = createReducer(
  initialResourceRatesState,
  on(ResourceRatesActions.selectResourceRate, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(ResourceRatesActions.resetSelectedResourceRate, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(ResourceRatesActions.resetResourceRates, (state) =>
    resourceRatesAdapter.removeAll(state)
  ),
  // Load resourceRates
  on(ResourceRatesActions.loadResourceRates, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ResourceRatesActions.loadResourceRatesSuccess,
    (state, { resourceRates }) =>
      resourceRatesAdapter.setAll(resourceRates, { ...state, loaded: true })
  ),
  on(ResourceRatesActions.loadResourceRatesFailure, onFailure),
  // Load resourceRate
  on(ResourceRatesActions.loadResourceRate, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ResourceRatesActions.loadResourceRateSuccess, (state, { resourceRate }) =>
    resourceRatesAdapter.upsertOne(resourceRate, { ...state, loaded: true })
  ),
  on(ResourceRatesActions.loadResourceRateFailure, onFailure),
  // Add resourceRate
  on(
    ResourceRatesActions.createResourceRateSuccess,
    (state, { resourceRate }) =>
      resourceRatesAdapter.addOne(resourceRate, state)
  ),
  on(ResourceRatesActions.createResourceRateFailure, onFailure),
  // Update resourceRate
  on(
    ResourceRatesActions.updateResourceRateSuccess,
    (state, { resourceRate }) =>
      resourceRatesAdapter.updateOne(
        { id: resourceRate.id, changes: resourceRate },
        state
      )
  ),
  on(ResourceRatesActions.updateResourceRateFailure, onFailure),
  // Delete resourceRate
  on(
    ResourceRatesActions.deleteResourceRateSuccess,
    (state, { resourceRate }) =>
      resourceRatesAdapter.removeOne(resourceRate.id, state)
  ),
  on(ResourceRatesActions.deleteResourceRateFailure, onFailure)
);

export function resourceRatesReducer(
  state: ResourceRatesState | undefined,
  action: Action
) {
  return _resourceRatesReducer(state, action);
}

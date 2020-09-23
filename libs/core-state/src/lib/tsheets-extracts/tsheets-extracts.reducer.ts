import { TsheetsExtract } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as TsheetsExtractsActions from './tsheets-extracts.actions';

export const TSHEETSEXTRACTS_FEATURE_KEY = 'tsheetsExtracts';

export interface TsheetsExtractsState extends EntityState<TsheetsExtract> {
  selectedId?: string | number; // which TsheetsExtracts record has been selected
  loaded: boolean; // has the TsheetsExtracts list been loaded
  error?: string | null; // last known error (if any)
}

export interface TsheetsExtractsPartialState {
  readonly [TSHEETSEXTRACTS_FEATURE_KEY]: TsheetsExtractsState;
}

export const tsheetsExtractsAdapter: EntityAdapter<TsheetsExtract> = createEntityAdapter<
  TsheetsExtract
>();

export const initialTsheetsExtractsState: TsheetsExtractsState = tsheetsExtractsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _tsheetsExtractsReducer = createReducer(
  initialTsheetsExtractsState,
  on(TsheetsExtractsActions.selectTsheetsExtract, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(TsheetsExtractsActions.resetSelectedTsheetsExtract, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(TsheetsExtractsActions.resetTsheetsExtracts, (state) =>
    tsheetsExtractsAdapter.removeAll(state)
  ),
  // Load tsheetsExtracts
  on(TsheetsExtractsActions.loadTsheetsExtracts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    TsheetsExtractsActions.loadTsheetsExtractsSuccess,
    (state, { tsheetsExtracts }) =>
      tsheetsExtractsAdapter.setAll(tsheetsExtracts, { ...state, loaded: true })
  ),
  on(TsheetsExtractsActions.loadTsheetsExtractsFailure, onFailure),
  // Load tsheetsExtract
  on(TsheetsExtractsActions.loadTsheetsExtract, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    TsheetsExtractsActions.loadTsheetsExtractSuccess,
    (state, { tsheetsExtract }) =>
      tsheetsExtractsAdapter.upsertOne(tsheetsExtract, {
        ...state,
        loaded: true,
      })
  ),
  on(TsheetsExtractsActions.loadTsheetsExtractFailure, onFailure),
  // Add tsheetsExtract
  on(
    TsheetsExtractsActions.createTsheetsExtractSuccess,
    (state, { tsheetsExtract }) =>
      tsheetsExtractsAdapter.addOne(tsheetsExtract, state)
  ),
  on(TsheetsExtractsActions.createTsheetsExtractFailure, onFailure),
  // Update tsheetsExtract
  on(
    TsheetsExtractsActions.updateTsheetsExtractSuccess,
    (state, { tsheetsExtract }) =>
      tsheetsExtractsAdapter.updateOne(
        { id: tsheetsExtract.id, changes: tsheetsExtract },
        state
      )
  ),
  on(TsheetsExtractsActions.updateTsheetsExtractFailure, onFailure),
  // Delete tsheetsExtract
  on(
    TsheetsExtractsActions.deleteTsheetsExtractSuccess,
    (state, { tsheetsExtract }) =>
      tsheetsExtractsAdapter.removeOne(tsheetsExtract.id, state)
  ),
  on(TsheetsExtractsActions.deleteTsheetsExtractFailure, onFailure)
);

export function tsheetsExtractsReducer(
  state: TsheetsExtractsState | undefined,
  action: Action
) {
  return _tsheetsExtractsReducer(state, action);
}

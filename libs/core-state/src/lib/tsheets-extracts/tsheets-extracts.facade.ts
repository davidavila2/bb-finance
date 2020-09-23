import { Injectable } from '@angular/core';
import { TsheetsExtract } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as TsheetsExtractsActions from './tsheets-extracts.actions';
import * as TsheetsExtractsSelectors from './tsheets-extracts.selectors';
import * as fromTsheetsExtracts from './tsheets-extracts.reducer';

@Injectable({
  providedIn: 'root',
})
export class TsheetsExtractsFacade {
  loaded$ = this.store.pipe(
    select(TsheetsExtractsSelectors.getTsheetsExtractsLoaded)
  );
  allTsheetsExtracts$ = this.store.pipe(
    select(TsheetsExtractsSelectors.getAllTsheetsExtracts)
  );
  selectedTsheetsExtract$ = this.store.pipe(
    select(TsheetsExtractsSelectors.getSelectedTsheetsExtract)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type ===
          TsheetsExtractsActions.createTsheetsExtract({} as any).type ||
        action.type ===
          TsheetsExtractsActions.updateTsheetsExtract({} as any).type ||
        action.type ===
          TsheetsExtractsActions.deleteTsheetsExtract({} as any).type
    )
  );

  constructor(
    private store: Store<fromTsheetsExtracts.TsheetsExtractsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectTsheetsExtract(selectedId: string) {
    this.dispatch(TsheetsExtractsActions.selectTsheetsExtract({ selectedId }));
  }

  loadTsheetsExtracts() {
    this.dispatch(TsheetsExtractsActions.loadTsheetsExtracts());
  }

  loadTsheetsExtract(tsheetsExtractId: string) {
    this.dispatch(
      TsheetsExtractsActions.loadTsheetsExtract({ tsheetsExtractId })
    );
  }

  createTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    this.dispatch(
      TsheetsExtractsActions.createTsheetsExtract({ tsheetsExtract })
    );
  }

  updateTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    this.dispatch(
      TsheetsExtractsActions.updateTsheetsExtract({ tsheetsExtract })
    );
  }

  deleteTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    this.dispatch(
      TsheetsExtractsActions.deleteTsheetsExtract({ tsheetsExtract })
    );
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

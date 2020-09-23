import { Injectable } from '@angular/core';
import { TsheetsExtract } from '@bba/api-interfaces';
import { TsheetsExtractsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as TsheetsExtractsActions from './tsheets-extracts.actions';

@Injectable()
export class TsheetsExtractsEffects {
  @Effect() loadTsheetsExtracts$ = this.actions$.pipe(
    ofType(TsheetsExtractsActions.loadTsheetsExtracts),
    fetch({
      run: (action) =>
        this.tsheetsExtractsService
          .all()
          .pipe(
            map((tsheetsExtracts: TsheetsExtract[]) =>
              TsheetsExtractsActions.loadTsheetsExtractsSuccess({
                tsheetsExtracts,
              })
            )
          ),
      onError: (action, error) =>
        TsheetsExtractsActions.loadTsheetsExtractsFailure({ error }),
    })
  );

  @Effect() loadTsheetsExtract$ = this.actions$.pipe(
    ofType(TsheetsExtractsActions.loadTsheetsExtract),
    fetch({
      run: (action) =>
        this.tsheetsExtractsService
          .find(action.tsheetsExtractId)
          .pipe(
            map((tsheetsExtract: TsheetsExtract) =>
              TsheetsExtractsActions.loadTsheetsExtractSuccess({
                tsheetsExtract,
              })
            )
          ),
      onError: (action, error) =>
        TsheetsExtractsActions.loadTsheetsExtractFailure({ error }),
    })
  );

  @Effect() createTsheetsExtract$ = this.actions$.pipe(
    ofType(TsheetsExtractsActions.createTsheetsExtract),
    pessimisticUpdate({
      run: (action) =>
        this.tsheetsExtractsService
          .create(action.tsheetsExtract)
          .pipe(
            map((tsheetsExtract: TsheetsExtract) =>
              TsheetsExtractsActions.createTsheetsExtractSuccess({
                tsheetsExtract,
              })
            )
          ),
      onError: (action, error) =>
        TsheetsExtractsActions.createTsheetsExtractFailure({ error }),
    })
  );

  @Effect() updateTsheetsExtract$ = this.actions$.pipe(
    ofType(TsheetsExtractsActions.updateTsheetsExtract),
    pessimisticUpdate({
      run: (action) =>
        this.tsheetsExtractsService
          .update(action.tsheetsExtract)
          .pipe(
            map((tsheetsExtract: TsheetsExtract) =>
              TsheetsExtractsActions.updateTsheetsExtractSuccess({
                tsheetsExtract,
              })
            )
          ),
      onError: (action, error) =>
        TsheetsExtractsActions.updateTsheetsExtractFailure({ error }),
    })
  );

  @Effect() deleteTsheetsExtract$ = this.actions$.pipe(
    ofType(TsheetsExtractsActions.deleteTsheetsExtract),
    pessimisticUpdate({
      run: (action) =>
        this.tsheetsExtractsService
          .delete(action.tsheetsExtract)
          .pipe(
            map((tsheetsExtract: TsheetsExtract) =>
              TsheetsExtractsActions.deleteTsheetsExtractSuccess({
                tsheetsExtract,
              })
            )
          ),
      onError: (action, error) =>
        TsheetsExtractsActions.deleteTsheetsExtractFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private tsheetsExtractsService: TsheetsExtractsService
  ) {}
}

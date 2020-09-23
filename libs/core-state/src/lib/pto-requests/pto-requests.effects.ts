import { Injectable } from '@angular/core';
import { PtoRequest } from '@bba/api-interfaces';
import { PtoRequestsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as PtoRequestsActions from './pto-requests.actions';

@Injectable()
export class PtoRequestsEffects {
  @Effect() loadPtoRequests$ = this.actions$.pipe(
    ofType(PtoRequestsActions.loadPtoRequests),
    fetch({
      run: (action) =>
        this.ptoRequestsService
          .all()
          .pipe(
            map((ptoRequests: PtoRequest[]) =>
              PtoRequestsActions.loadPtoRequestsSuccess({ ptoRequests })
            )
          ),
      onError: (action, error) =>
        PtoRequestsActions.loadPtoRequestsFailure({ error }),
    })
  );

  @Effect() loadPtoRequest$ = this.actions$.pipe(
    ofType(PtoRequestsActions.loadPtoRequest),
    fetch({
      run: (action) =>
        this.ptoRequestsService
          .find(action.ptoRequestId)
          .pipe(
            map((ptoRequest: PtoRequest) =>
              PtoRequestsActions.loadPtoRequestSuccess({ ptoRequest })
            )
          ),
      onError: (action, error) =>
        PtoRequestsActions.loadPtoRequestFailure({ error }),
    })
  );

  @Effect() createPtoRequest$ = this.actions$.pipe(
    ofType(PtoRequestsActions.createPtoRequest),
    pessimisticUpdate({
      run: (action) =>
        this.ptoRequestsService
          .create(action.ptoRequest)
          .pipe(
            map((ptoRequest: PtoRequest) =>
              PtoRequestsActions.createPtoRequestSuccess({ ptoRequest })
            )
          ),
      onError: (action, error) =>
        PtoRequestsActions.createPtoRequestFailure({ error }),
    })
  );

  @Effect() updatePtoRequest$ = this.actions$.pipe(
    ofType(PtoRequestsActions.updatePtoRequest),
    pessimisticUpdate({
      run: (action) =>
        this.ptoRequestsService
          .update(action.ptoRequest)
          .pipe(
            map((ptoRequest: PtoRequest) =>
              PtoRequestsActions.updatePtoRequestSuccess({ ptoRequest })
            )
          ),
      onError: (action, error) =>
        PtoRequestsActions.updatePtoRequestFailure({ error }),
    })
  );

  @Effect() deletePtoRequest$ = this.actions$.pipe(
    ofType(PtoRequestsActions.deletePtoRequest),
    pessimisticUpdate({
      run: (action) =>
        this.ptoRequestsService
          .delete(action.ptoRequest)
          .pipe(
            map((ptoRequest: PtoRequest) =>
              PtoRequestsActions.deletePtoRequestSuccess({ ptoRequest })
            )
          ),
      onError: (action, error) =>
        PtoRequestsActions.deletePtoRequestFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private ptoRequestsService: PtoRequestsService
  ) {}
}

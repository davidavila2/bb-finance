import { Injectable } from '@angular/core';
import { PtoRequest } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as PtoRequestsActions from './pto-requests.actions';
import * as PtoRequestsSelectors from './pto-requests.selectors';
import * as fromPtoRequests from './pto-requests.reducer';

@Injectable({
  providedIn: 'root',
})
export class PtoRequestsFacade {
  loaded$ = this.store.pipe(select(PtoRequestsSelectors.getPtoRequestsLoaded));
  allPtoRequests$ = this.store.pipe(
    select(PtoRequestsSelectors.getAllPtoRequests)
  );
  selectedPtoRequest$ = this.store.pipe(
    select(PtoRequestsSelectors.getSelectedPtoRequest)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === PtoRequestsActions.createPtoRequest({} as any).type ||
        action.type === PtoRequestsActions.updatePtoRequest({} as any).type ||
        action.type === PtoRequestsActions.deletePtoRequest({} as any).type
    )
  );

  constructor(
    private store: Store<fromPtoRequests.PtoRequestsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectPtoRequest(selectedId: string) {
    this.dispatch(PtoRequestsActions.selectPtoRequest({ selectedId }));
  }

  loadPtoRequests() {
    this.dispatch(PtoRequestsActions.loadPtoRequests());
  }

  loadPtoRequest(ptoRequestId: string) {
    this.dispatch(PtoRequestsActions.loadPtoRequest({ ptoRequestId }));
  }

  createPtoRequest(ptoRequest: PtoRequest) {
    this.dispatch(PtoRequestsActions.createPtoRequest({ ptoRequest }));
  }

  updatePtoRequest(ptoRequest: PtoRequest) {
    this.dispatch(PtoRequestsActions.updatePtoRequest({ ptoRequest }));
  }

  deletePtoRequest(ptoRequest: PtoRequest) {
    this.dispatch(PtoRequestsActions.deletePtoRequest({ ptoRequest }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

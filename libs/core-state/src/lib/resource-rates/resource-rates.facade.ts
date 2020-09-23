import { Injectable } from '@angular/core';
import { ResourceRate } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as ResourceRatesActions from './resource-rates.actions';
import * as ResourceRatesSelectors from './resource-rates.selectors';
import * as fromResourceRates from './resource-rates.reducer';

@Injectable({
  providedIn: 'root',
})
export class ResourceRatesFacade {
  loaded$ = this.store.pipe(
    select(ResourceRatesSelectors.getResourceRatesLoaded)
  );
  allResourceRates$ = this.store.pipe(
    select(ResourceRatesSelectors.getAllResourceRates)
  );
  selectedResourceRate$ = this.store.pipe(
    select(ResourceRatesSelectors.getSelectedResourceRate)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type ===
          ResourceRatesActions.createResourceRate({} as any).type ||
        action.type ===
          ResourceRatesActions.updateResourceRate({} as any).type ||
        action.type === ResourceRatesActions.deleteResourceRate({} as any).type
    )
  );

  constructor(
    private store: Store<fromResourceRates.ResourceRatesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectResourceRate(selectedId: string) {
    this.dispatch(ResourceRatesActions.selectResourceRate({ selectedId }));
  }

  loadResourceRates() {
    this.dispatch(ResourceRatesActions.loadResourceRates());
  }

  loadResourceRate(resourceRateId: string) {
    this.dispatch(ResourceRatesActions.loadResourceRate({ resourceRateId }));
  }

  createResourceRate(resourceRate: ResourceRate) {
    this.dispatch(ResourceRatesActions.createResourceRate({ resourceRate }));
  }

  updateResourceRate(resourceRate: ResourceRate) {
    this.dispatch(ResourceRatesActions.updateResourceRate({ resourceRate }));
  }

  deleteResourceRate(resourceRate: ResourceRate) {
    this.dispatch(ResourceRatesActions.deleteResourceRate({ resourceRate }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

import { Injectable } from '@angular/core';
import { ResourceRate } from '@bba/api-interfaces';
import { ResourceRatesService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as ResourceRatesActions from './resource-rates.actions';

@Injectable()
export class ResourceRatesEffects {
  @Effect() loadResourceRates$ = this.actions$.pipe(
    ofType(ResourceRatesActions.loadResourceRates),
    fetch({
      run: (action) =>
        this.resourceRatesService
          .all()
          .pipe(
            map((resourceRates: ResourceRate[]) =>
              ResourceRatesActions.loadResourceRatesSuccess({ resourceRates })
            )
          ),
      onError: (action, error) =>
        ResourceRatesActions.loadResourceRatesFailure({ error }),
    })
  );

  @Effect() loadResourceRate$ = this.actions$.pipe(
    ofType(ResourceRatesActions.loadResourceRate),
    fetch({
      run: (action) =>
        this.resourceRatesService
          .find(action.resourceRateId)
          .pipe(
            map((resourceRate: ResourceRate) =>
              ResourceRatesActions.loadResourceRateSuccess({ resourceRate })
            )
          ),
      onError: (action, error) =>
        ResourceRatesActions.loadResourceRateFailure({ error }),
    })
  );

  @Effect() createResourceRate$ = this.actions$.pipe(
    ofType(ResourceRatesActions.createResourceRate),
    pessimisticUpdate({
      run: (action) =>
        this.resourceRatesService
          .create(action.resourceRate)
          .pipe(
            map((resourceRate: ResourceRate) =>
              ResourceRatesActions.createResourceRateSuccess({ resourceRate })
            )
          ),
      onError: (action, error) =>
        ResourceRatesActions.createResourceRateFailure({ error }),
    })
  );

  @Effect() updateResourceRate$ = this.actions$.pipe(
    ofType(ResourceRatesActions.updateResourceRate),
    pessimisticUpdate({
      run: (action) =>
        this.resourceRatesService
          .update(action.resourceRate)
          .pipe(
            map((resourceRate: ResourceRate) =>
              ResourceRatesActions.updateResourceRateSuccess({ resourceRate })
            )
          ),
      onError: (action, error) =>
        ResourceRatesActions.updateResourceRateFailure({ error }),
    })
  );

  @Effect() deleteResourceRate$ = this.actions$.pipe(
    ofType(ResourceRatesActions.deleteResourceRate),
    pessimisticUpdate({
      run: (action) =>
        this.resourceRatesService
          .delete(action.resourceRate)
          .pipe(
            map((resourceRate: ResourceRate) =>
              ResourceRatesActions.deleteResourceRateSuccess({ resourceRate })
            )
          ),
      onError: (action, error) =>
        ResourceRatesActions.deleteResourceRateFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private resourceRatesService: ResourceRatesService
  ) {}
}

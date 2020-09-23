import { Injectable } from '@angular/core';
import { Resource } from '@bba/api-interfaces';
import { ResourcesService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as ResourcesActions from './resources.actions';

@Injectable()
export class ResourcesEffects {
  @Effect() loadResources$ = this.actions$.pipe(
    ofType(ResourcesActions.loadResources),
    fetch({
      run: (action) =>
        this.resourcesService
          .all()
          .pipe(
            map((resources: Resource[]) =>
              ResourcesActions.loadResourcesSuccess({ resources })
            )
          ),
      onError: (action, error) =>
        ResourcesActions.loadResourcesFailure({ error }),
    })
  );

  @Effect() loadResource$ = this.actions$.pipe(
    ofType(ResourcesActions.loadResource),
    fetch({
      run: (action) =>
        this.resourcesService
          .find(action.resourceId)
          .pipe(
            map((resource: Resource) =>
              ResourcesActions.loadResourceSuccess({ resource })
            )
          ),
      onError: (action, error) =>
        ResourcesActions.loadResourceFailure({ error }),
    })
  );

  @Effect() createResource$ = this.actions$.pipe(
    ofType(ResourcesActions.createResource),
    pessimisticUpdate({
      run: (action) =>
        this.resourcesService
          .create(action.resource)
          .pipe(
            map((resource: Resource) =>
              ResourcesActions.createResourceSuccess({ resource })
            )
          ),
      onError: (action, error) =>
        ResourcesActions.createResourceFailure({ error }),
    })
  );

  @Effect() updateResource$ = this.actions$.pipe(
    ofType(ResourcesActions.updateResource),
    pessimisticUpdate({
      run: (action) =>
        this.resourcesService
          .update(action.resource)
          .pipe(
            map((resource: Resource) =>
              ResourcesActions.updateResourceSuccess({ resource })
            )
          ),
      onError: (action, error) =>
        ResourcesActions.updateResourceFailure({ error }),
    })
  );

  @Effect() deleteResource$ = this.actions$.pipe(
    ofType(ResourcesActions.deleteResource),
    pessimisticUpdate({
      run: (action) =>
        this.resourcesService
          .delete(action.resource)
          .pipe(
            map((resource: Resource) =>
              ResourcesActions.deleteResourceSuccess({ resource })
            )
          ),
      onError: (action, error) =>
        ResourcesActions.deleteResourceFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private resourcesService: ResourcesService
  ) {}
}

import { Injectable } from '@angular/core';
import { Resource } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as ResourcesActions from './resources.actions';
import * as ResourcesSelectors from './resources.selectors';
import * as fromResources from './resources.reducer';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFacade {
  loaded$ = this.store.pipe(select(ResourcesSelectors.getResourcesLoaded));
  allResources$ = this.store.pipe(select(ResourcesSelectors.getAllResources));
  selectedResource$ = this.store.pipe(
    select(ResourcesSelectors.getSelectedResource)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ResourcesActions.createResource({} as any).type ||
        action.type === ResourcesActions.updateResource({} as any).type ||
        action.type === ResourcesActions.deleteResource({} as any).type
    )
  );

  constructor(
    private store: Store<fromResources.ResourcesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectResource(selectedId: string) {
    this.dispatch(ResourcesActions.selectResource({ selectedId }));
  }

  loadResources() {
    this.dispatch(ResourcesActions.loadResources());
  }

  loadResource(resourceId: string) {
    this.dispatch(ResourcesActions.loadResource({ resourceId }));
  }

  createResource(resource: Resource) {
    this.dispatch(ResourcesActions.createResource({ resource }));
  }

  updateResource(resource: Resource) {
    this.dispatch(ResourcesActions.updateResource({ resource }));
  }

  deleteResource(resource: Resource) {
    this.dispatch(ResourcesActions.deleteResource({ resource }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

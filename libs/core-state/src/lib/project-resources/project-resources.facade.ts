import { Injectable } from '@angular/core';
import { ProjectResource } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as ProjectResourcesActions from './project-resources.actions';
import * as ProjectResourcesSelectors from './project-resources.selectors';
import * as fromProjectResources from './project-resources.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProjectResourcesFacade {
  loaded$ = this.store.pipe(
    select(ProjectResourcesSelectors.getProjectResourcesLoaded)
  );
  allProjectResources$ = this.store.pipe(
    select(ProjectResourcesSelectors.getAllProjectResources)
  );
  selectedProjectResource$ = this.store.pipe(
    select(ProjectResourcesSelectors.getSelectedProjectResource)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type ===
          ProjectResourcesActions.createProjectResource({} as any).type ||
        action.type ===
          ProjectResourcesActions.updateProjectResource({} as any).type ||
        action.type ===
          ProjectResourcesActions.deleteProjectResource({} as any).type
    )
  );

  constructor(
    private store: Store<fromProjectResources.ProjectResourcesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectProjectResource(selectedId: string) {
    this.dispatch(
      ProjectResourcesActions.selectProjectResource({ selectedId })
    );
  }

  loadProjectResources() {
    this.dispatch(ProjectResourcesActions.loadProjectResources());
  }

  loadProjectResource(projectResourceId: string) {
    this.dispatch(
      ProjectResourcesActions.loadProjectResource({ projectResourceId })
    );
  }

  createProjectResource(projectResource: ProjectResource) {
    this.dispatch(
      ProjectResourcesActions.createProjectResource({ projectResource })
    );
  }

  updateProjectResource(projectResource: ProjectResource) {
    this.dispatch(
      ProjectResourcesActions.updateProjectResource({ projectResource })
    );
  }

  deleteProjectResource(projectResource: ProjectResource) {
    this.dispatch(
      ProjectResourcesActions.deleteProjectResource({ projectResource })
    );
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

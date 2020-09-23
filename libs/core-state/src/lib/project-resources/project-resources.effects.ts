import { Injectable } from '@angular/core';
import { ProjectResource } from '@bba/api-interfaces';
import { ProjectResourcesService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as ProjectResourcesActions from './project-resources.actions';

@Injectable()
export class ProjectResourcesEffects {
  @Effect() loadProjectResources$ = this.actions$.pipe(
    ofType(ProjectResourcesActions.loadProjectResources),
    fetch({
      run: (action) =>
        this.projectResourcesService
          .all()
          .pipe(
            map((projectResources: ProjectResource[]) =>
              ProjectResourcesActions.loadProjectResourcesSuccess({
                projectResources,
              })
            )
          ),
      onError: (action, error) =>
        ProjectResourcesActions.loadProjectResourcesFailure({ error }),
    })
  );

  @Effect() loadProjectResource$ = this.actions$.pipe(
    ofType(ProjectResourcesActions.loadProjectResource),
    fetch({
      run: (action) =>
        this.projectResourcesService
          .find(action.projectResourceId)
          .pipe(
            map((projectResource: ProjectResource) =>
              ProjectResourcesActions.loadProjectResourceSuccess({
                projectResource,
              })
            )
          ),
      onError: (action, error) =>
        ProjectResourcesActions.loadProjectResourceFailure({ error }),
    })
  );

  @Effect() createProjectResource$ = this.actions$.pipe(
    ofType(ProjectResourcesActions.createProjectResource),
    pessimisticUpdate({
      run: (action) =>
        this.projectResourcesService
          .create(action.projectResource)
          .pipe(
            map((projectResource: ProjectResource) =>
              ProjectResourcesActions.createProjectResourceSuccess({
                projectResource,
              })
            )
          ),
      onError: (action, error) =>
        ProjectResourcesActions.createProjectResourceFailure({ error }),
    })
  );

  @Effect() updateProjectResource$ = this.actions$.pipe(
    ofType(ProjectResourcesActions.updateProjectResource),
    pessimisticUpdate({
      run: (action) =>
        this.projectResourcesService
          .update(action.projectResource)
          .pipe(
            map((projectResource: ProjectResource) =>
              ProjectResourcesActions.updateProjectResourceSuccess({
                projectResource,
              })
            )
          ),
      onError: (action, error) =>
        ProjectResourcesActions.updateProjectResourceFailure({ error }),
    })
  );

  @Effect() deleteProjectResource$ = this.actions$.pipe(
    ofType(ProjectResourcesActions.deleteProjectResource),
    pessimisticUpdate({
      run: (action) =>
        this.projectResourcesService
          .delete(action.projectResource)
          .pipe(
            map((projectResource: ProjectResource) =>
              ProjectResourcesActions.deleteProjectResourceSuccess({
                projectResource,
              })
            )
          ),
      onError: (action, error) =>
        ProjectResourcesActions.deleteProjectResourceFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private projectResourcesService: ProjectResourcesService
  ) {}
}

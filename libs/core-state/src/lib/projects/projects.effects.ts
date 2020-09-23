import { Injectable } from '@angular/core';
import { Project } from '@bba/api-interfaces';
import { ProjectsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as ProjectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  @Effect() loadProjects$ = this.actions$.pipe(
    ofType(ProjectsActions.loadProjects),
    fetch({
      run: (action) =>
        this.projectsService
          .all()
          .pipe(
            map((projects: Project[]) =>
              ProjectsActions.loadProjectsSuccess({ projects })
            )
          ),
      onError: (action, error) =>
        ProjectsActions.loadProjectsFailure({ error }),
    })
  );

  @Effect() loadProject$ = this.actions$.pipe(
    ofType(ProjectsActions.loadProject),
    fetch({
      run: (action) =>
        this.projectsService
          .find(action.projectId)
          .pipe(
            map((project: Project) =>
              ProjectsActions.loadProjectSuccess({ project })
            )
          ),
      onError: (action, error) => ProjectsActions.loadProjectFailure({ error }),
    })
  );

  @Effect() createProject$ = this.actions$.pipe(
    ofType(ProjectsActions.createProject),
    pessimisticUpdate({
      run: (action) =>
        this.projectsService
          .create(action.project)
          .pipe(
            map((project: Project) =>
              ProjectsActions.createProjectSuccess({ project })
            )
          ),
      onError: (action, error) =>
        ProjectsActions.createProjectFailure({ error }),
    })
  );

  @Effect() updateProject$ = this.actions$.pipe(
    ofType(ProjectsActions.updateProject),
    pessimisticUpdate({
      run: (action) =>
        this.projectsService
          .update(action.project)
          .pipe(
            map((project: Project) =>
              ProjectsActions.updateProjectSuccess({ project })
            )
          ),
      onError: (action, error) =>
        ProjectsActions.updateProjectFailure({ error }),
    })
  );

  @Effect() deleteProject$ = this.actions$.pipe(
    ofType(ProjectsActions.deleteProject),
    pessimisticUpdate({
      run: (action) =>
        this.projectsService
          .delete(action.project)
          .pipe(
            map((project: Project) =>
              ProjectsActions.deleteProjectSuccess({ project })
            )
          ),
      onError: (action, error) =>
        ProjectsActions.deleteProjectFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) {}
}

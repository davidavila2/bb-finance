import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Project } from '@bba/api-interfaces';

import { ProjectsService } from './projects.service';

import { mockProject } from '@bba/testing';

describe('ProjectsService', () => {
  const model = 'projects';
  let httpTestingController: HttpTestingController;
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockProject);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockProject]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockProject.id).subscribe((res) => {
        expect(res).toEqual(mockProject);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProject.id)
      );
      req.flush(mockProject);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockProject).subscribe((res) => {
        expect(res).toEqual(mockProject);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockProject);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockProject).subscribe((res) => {
        expect(res).toEqual(mockProject);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProject.id)
      );
      req.flush(mockProject);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockProject).subscribe((res) => {
        expect(res).toEqual(mockProject);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProject.id)
      );
      req.flush(mockProject);
      httpTestingController.verify();
    });
  });
});

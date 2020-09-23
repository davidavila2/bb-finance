import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProjectResource } from '@bba/api-interfaces';

import { ProjectResourcesService } from './project-resources.service';

import { mockProjectResource } from '@bba/testing';

describe('ProjectResourcesService', () => {
  const model = 'project-resources';
  let httpTestingController: HttpTestingController;
  let service: ProjectResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProjectResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockProjectResource);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockProjectResource]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockProjectResource.id).subscribe((res) => {
        expect(res).toEqual(mockProjectResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProjectResource.id)
      );
      req.flush(mockProjectResource);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockProjectResource).subscribe((res) => {
        expect(res).toEqual(mockProjectResource);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockProjectResource);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockProjectResource).subscribe((res) => {
        expect(res).toEqual(mockProjectResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProjectResource.id)
      );
      req.flush(mockProjectResource);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockProjectResource).subscribe((res) => {
        expect(res).toEqual(mockProjectResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockProjectResource.id)
      );
      req.flush(mockProjectResource);
      httpTestingController.verify();
    });
  });
});

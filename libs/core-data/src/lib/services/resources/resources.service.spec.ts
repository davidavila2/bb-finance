import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Resource } from '@bba/api-interfaces';

import { ResourcesService } from './resources.service';

import { mockResource } from '@bba/testing';

describe('ResourcesService', () => {
  const model = 'resources';
  let httpTestingController: HttpTestingController;
  let service: ResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockResource);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockResource]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockResource.id).subscribe((res) => {
        expect(res).toEqual(mockResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResource.id)
      );
      req.flush(mockResource);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockResource).subscribe((res) => {
        expect(res).toEqual(mockResource);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockResource);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockResource).subscribe((res) => {
        expect(res).toEqual(mockResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResource.id)
      );
      req.flush(mockResource);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockResource).subscribe((res) => {
        expect(res).toEqual(mockResource);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResource.id)
      );
      req.flush(mockResource);
      httpTestingController.verify();
    });
  });
});

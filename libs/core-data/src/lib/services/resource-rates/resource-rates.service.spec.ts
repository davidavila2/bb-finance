import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ResourceRate } from '@bba/api-interfaces';

import { ResourceRatesService } from './resource-rates.service';

import { mockResourceRate } from '@bba/testing';

describe('ResourceRatesService', () => {
  const model = 'resource-rates';
  let httpTestingController: HttpTestingController;
  let service: ResourceRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ResourceRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockResourceRate);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockResourceRate]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockResourceRate.id).subscribe((res) => {
        expect(res).toEqual(mockResourceRate);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResourceRate.id)
      );
      req.flush(mockResourceRate);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockResourceRate).subscribe((res) => {
        expect(res).toEqual(mockResourceRate);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockResourceRate);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockResourceRate).subscribe((res) => {
        expect(res).toEqual(mockResourceRate);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResourceRate.id)
      );
      req.flush(mockResourceRate);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockResourceRate).subscribe((res) => {
        expect(res).toEqual(mockResourceRate);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockResourceRate.id)
      );
      req.flush(mockResourceRate);
      httpTestingController.verify();
    });
  });
});

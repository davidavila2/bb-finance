import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PtoRequest } from '@bba/api-interfaces';

import { PtoRequestsService } from './pto-requests.service';

import { mockPtoRequest } from '@bba/testing';

describe('PtoRequestsService', () => {
  const model = 'pto-requests';
  let httpTestingController: HttpTestingController;
  let service: PtoRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PtoRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockPtoRequest);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockPtoRequest]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockPtoRequest.id).subscribe((res) => {
        expect(res).toEqual(mockPtoRequest);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockPtoRequest.id)
      );
      req.flush(mockPtoRequest);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockPtoRequest).subscribe((res) => {
        expect(res).toEqual(mockPtoRequest);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockPtoRequest);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockPtoRequest).subscribe((res) => {
        expect(res).toEqual(mockPtoRequest);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockPtoRequest.id)
      );
      req.flush(mockPtoRequest);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockPtoRequest).subscribe((res) => {
        expect(res).toEqual(mockPtoRequest);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockPtoRequest.id)
      );
      req.flush(mockPtoRequest);
      httpTestingController.verify();
    });
  });
});

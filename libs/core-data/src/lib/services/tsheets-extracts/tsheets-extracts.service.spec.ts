import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TsheetsExtract } from '@bba/api-interfaces';

import { TsheetsExtractsService } from './tsheets-extracts.service';

import { mockTsheetsExtract } from '@bba/testing';

describe('TsheetsExtractsService', () => {
  const model = 'tsheets-extracts';
  let httpTestingController: HttpTestingController;
  let service: TsheetsExtractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TsheetsExtractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockTsheetsExtract);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockTsheetsExtract]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockTsheetsExtract.id).subscribe((res) => {
        expect(res).toEqual(mockTsheetsExtract);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockTsheetsExtract.id)
      );
      req.flush(mockTsheetsExtract);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockTsheetsExtract).subscribe((res) => {
        expect(res).toEqual(mockTsheetsExtract);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockTsheetsExtract);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockTsheetsExtract).subscribe((res) => {
        expect(res).toEqual(mockTsheetsExtract);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockTsheetsExtract.id)
      );
      req.flush(mockTsheetsExtract);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockTsheetsExtract).subscribe((res) => {
        expect(res).toEqual(mockTsheetsExtract);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockTsheetsExtract.id)
      );
      req.flush(mockTsheetsExtract);
      httpTestingController.verify();
    });
  });
});

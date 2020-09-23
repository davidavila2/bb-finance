import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Holiday } from '@bba/api-interfaces';

import { HolidaysService } from './holidays.service';

import { mockHoliday } from '@bba/testing';

describe('HolidaysService', () => {
  const model = 'holidays';
  let httpTestingController: HttpTestingController;
  let service: HolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HolidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockHoliday);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockHoliday]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockHoliday.id).subscribe((res) => {
        expect(res).toEqual(mockHoliday);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockHoliday.id)
      );
      req.flush(mockHoliday);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockHoliday).subscribe((res) => {
        expect(res).toEqual(mockHoliday);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockHoliday);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockHoliday).subscribe((res) => {
        expect(res).toEqual(mockHoliday);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockHoliday.id)
      );
      req.flush(mockHoliday);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockHoliday).subscribe((res) => {
        expect(res).toEqual(mockHoliday);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockHoliday.id)
      );
      req.flush(mockHoliday);
      httpTestingController.verify();
    });
  });
});

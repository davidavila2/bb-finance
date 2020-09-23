import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DailyHourlyLog } from '@bba/api-interfaces';

import { DailyHourlyLogsService } from './daily-hourly-logs.service';

import { mockDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogsService', () => {
  const model = 'daily-hourly-logs';
  let httpTestingController: HttpTestingController;
  let service: DailyHourlyLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DailyHourlyLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockDailyHourlyLog);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockDailyHourlyLog]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockDailyHourlyLog.id).subscribe((res) => {
        expect(res).toEqual(mockDailyHourlyLog);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockDailyHourlyLog.id)
      );
      req.flush(mockDailyHourlyLog);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockDailyHourlyLog).subscribe((res) => {
        expect(res).toEqual(mockDailyHourlyLog);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockDailyHourlyLog);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockDailyHourlyLog).subscribe((res) => {
        expect(res).toEqual(mockDailyHourlyLog);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockDailyHourlyLog.id)
      );
      req.flush(mockDailyHourlyLog);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockDailyHourlyLog).subscribe((res) => {
        expect(res).toEqual(mockDailyHourlyLog);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockDailyHourlyLog.id)
      );
      req.flush(mockDailyHourlyLog);
      httpTestingController.verify();
    });
  });
});

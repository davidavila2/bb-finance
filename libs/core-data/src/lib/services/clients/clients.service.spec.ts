import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Client } from '@bba/api-interfaces';

import { ClientsService } from './clients.service';

import { mockClient } from '@bba/testing';

describe('ClientsService', () => {
  const model = 'clients';
  let httpTestingController: HttpTestingController;
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockClient);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockClient]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockClient.id).subscribe((res) => {
        expect(res).toEqual(mockClient);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockClient.id)
      );
      req.flush(mockClient);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockClient).subscribe((res) => {
        expect(res).toEqual(mockClient);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockClient);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockClient).subscribe((res) => {
        expect(res).toEqual(mockClient);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockClient.id)
      );
      req.flush(mockClient);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockClient).subscribe((res) => {
        expect(res).toEqual(mockClient);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockClient.id)
      );
      req.flush(mockClient);
      httpTestingController.verify();
    });
  });
});

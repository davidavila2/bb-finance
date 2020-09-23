import { Test, TestingModule } from '@nestjs/testing';
import { PtoRequestsService } from './pto-requests.service';

describe('PtoRequestsService', () => {
  let service: PtoRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PtoRequestsService],
    }).compile();

    service = module.get<PtoRequestsService>(PtoRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

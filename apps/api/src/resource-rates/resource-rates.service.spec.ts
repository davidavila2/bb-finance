import { Test, TestingModule } from '@nestjs/testing';
import { ResourceRatesService } from './resource-rates.service';

describe('ResourceRatesService', () => {
  let service: ResourceRatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceRatesService],
    }).compile();

    service = module.get<ResourceRatesService>(ResourceRatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

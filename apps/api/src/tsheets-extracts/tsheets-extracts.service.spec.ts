import { Test, TestingModule } from '@nestjs/testing';
import { TsheetsExtractsService } from './tsheets-extracts.service';

describe('TsheetsExtractsService', () => {
  let service: TsheetsExtractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsheetsExtractsService],
    }).compile();

    service = module.get<TsheetsExtractsService>(TsheetsExtractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TsheetsExtractsController } from './tsheets-extracts.controller';

describe('TsheetsExtractsController', () => {
  let controller: TsheetsExtractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsheetsExtractsController],
    }).compile();

    controller = module.get<TsheetsExtractsController>(
      TsheetsExtractsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ResourceRatesController } from './resource-rates.controller';

describe('ResourceRatesController', () => {
  let controller: ResourceRatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceRatesController],
    }).compile();

    controller = module.get<ResourceRatesController>(ResourceRatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

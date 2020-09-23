import { Test, TestingModule } from '@nestjs/testing';
import { PtoRequestsController } from './pto-requests.controller';

describe('PtoRequestsController', () => {
  let controller: PtoRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PtoRequestsController],
    }).compile();

    controller = module.get<PtoRequestsController>(PtoRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

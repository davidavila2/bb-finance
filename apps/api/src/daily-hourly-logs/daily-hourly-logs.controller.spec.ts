import { Test, TestingModule } from '@nestjs/testing';
import { DailyHourlyLogsController } from './daily-hourly-logs.controller';

describe('DailyHourlyLogsController', () => {
  let controller: DailyHourlyLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyHourlyLogsController],
    }).compile();

    controller = module.get<DailyHourlyLogsController>(
      DailyHourlyLogsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

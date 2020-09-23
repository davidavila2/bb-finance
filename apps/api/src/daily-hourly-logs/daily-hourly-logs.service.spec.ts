import { Test, TestingModule } from '@nestjs/testing';
import { DailyHourlyLogsService } from './daily-hourly-logs.service';

describe('DailyHourlyLogsService', () => {
  let service: DailyHourlyLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyHourlyLogsService],
    }).compile();

    service = module.get<DailyHourlyLogsService>(DailyHourlyLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { DailyHourlyLog } from '@bba/api-interfaces';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('dailyHourlyLogs')
export class DailyHourlyLogsController {
  constructor(
    private readonly dailyHourlyLogsService: InMemoryDBService<DailyHourlyLog>
  ) {}

  @Get()
  all(): DailyHourlyLog[] {
    return this.dailyHourlyLogsService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): DailyHourlyLog {
    return this.dailyHourlyLogsService.get(id);
  }

  @Post()
  create(@Body() dailyHourlyLog: DailyHourlyLog): DailyHourlyLog {
    return this.dailyHourlyLogsService.create(dailyHourlyLog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dailyHourlyLog: DailyHourlyLog) {
    return this.dailyHourlyLogsService.update(dailyHourlyLog);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dailyHourlyLogsService.delete(id);
  }
}

import { Holiday } from '@bba/api-interfaces';
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

@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: InMemoryDBService<Holiday>) {}

  @Get()
  all(): Holiday[] {
    return this.holidaysService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): Holiday {
    return this.holidaysService.get(id);
  }

  @Post()
  create(@Body() holiday: Holiday): Holiday {
    return this.holidaysService.create(holiday);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() holiday: Holiday) {
    return this.holidaysService.update(holiday);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.holidaysService.delete(id);
  }
}

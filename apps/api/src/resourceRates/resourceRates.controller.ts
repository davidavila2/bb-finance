import { ResourceRate } from '@bba/api-interfaces';
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

@Controller('resourceRates')
export class ResourceRatesController {
  constructor(
    private readonly resourceRatesService: InMemoryDBService<ResourceRate>
  ) {}

  @Get()
  all(): ResourceRate[] {
    return this.resourceRatesService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): ResourceRate {
    return this.resourceRatesService.get(id);
  }

  @Post()
  create(@Body() resourceRate: ResourceRate): ResourceRate {
    return this.resourceRatesService.create(resourceRate);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() resourceRate: ResourceRate) {
    return this.resourceRatesService.update(resourceRate);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resourceRatesService.delete(id);
  }
}

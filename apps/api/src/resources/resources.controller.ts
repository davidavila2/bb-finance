import { Resource } from '@bba/api-interfaces';
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

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: InMemoryDBService<Resource>) {}

  @Get()
  all(): Resource[] {
    return this.resourcesService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): Resource {
    return this.resourcesService.get(id);
  }

  @Post()
  create(@Body() resource: Resource): Resource {
    return this.resourcesService.create(resource);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() resource: Resource) {
    return this.resourcesService.update(resource);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resourcesService.delete(id);
  }
}

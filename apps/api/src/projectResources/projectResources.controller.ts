import { ProjectResource } from '@bba/api-interfaces';
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

@Controller('projectResources')
export class ProjectResourcesController {
  constructor(
    private readonly projectResourcesService: InMemoryDBService<ProjectResource>
  ) {}

  @Get()
  all(): ProjectResource[] {
    return this.projectResourcesService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): ProjectResource {
    return this.projectResourcesService.get(id);
  }

  @Post()
  create(@Body() projectResource: ProjectResource): ProjectResource {
    return this.projectResourcesService.create(projectResource);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() projectResource: ProjectResource) {
    return this.projectResourcesService.update(projectResource);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectResourcesService.delete(id);
  }
}

import { Project } from '@bba/api-interfaces';
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

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: InMemoryDBService<Project>) {}

  @Get()
  all(): Project[] {
    return this.projectsService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): Project {
    return this.projectsService.get(id);
  }

  @Post()
  create(@Body() project: Project): Project {
    return this.projectsService.create(project);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() project: Project) {
    return this.projectsService.update(project);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.delete(id);
  }
}

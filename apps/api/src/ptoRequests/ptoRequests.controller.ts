import { PtoRequest } from '@bba/api-interfaces';
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

@Controller('ptoRequests')
export class PtoRequestsController {
  constructor(
    private readonly ptoRequestsService: InMemoryDBService<PtoRequest>
  ) {}

  @Get()
  all(): PtoRequest[] {
    return this.ptoRequestsService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): PtoRequest {
    return this.ptoRequestsService.get(id);
  }

  @Post()
  create(@Body() ptoRequest: PtoRequest): PtoRequest {
    return this.ptoRequestsService.create(ptoRequest);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() ptoRequest: PtoRequest) {
    return this.ptoRequestsService.update(ptoRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ptoRequestsService.delete(id);
  }
}

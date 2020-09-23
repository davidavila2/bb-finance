import { Client } from '@bba/api-interfaces';
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

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: InMemoryDBService<Client>) {}

  @Get()
  all(): Client[] {
    return this.clientsService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): Client {
    return this.clientsService.get(id);
  }

  @Post()
  create(@Body() client: Client): Client {
    return this.clientsService.create(client);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() client: Client) {
    return this.clientsService.update(client);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientsService.delete(id);
  }
}

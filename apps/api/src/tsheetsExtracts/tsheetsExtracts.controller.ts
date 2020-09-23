import { TsheetsExtract } from '@bba/api-interfaces';
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

@Controller('tsheetsExtracts')
export class TsheetsExtractsController {
  constructor(
    private readonly tsheetsExtractsService: InMemoryDBService<TsheetsExtract>
  ) {}

  @Get()
  all(): TsheetsExtract[] {
    return this.tsheetsExtractsService.getAll();
  }

  @Get(':id')
  find(@Param() id: number): TsheetsExtract {
    return this.tsheetsExtractsService.get(id);
  }

  @Post()
  create(@Body() tsheetsExtract: TsheetsExtract): TsheetsExtract {
    return this.tsheetsExtractsService.create(tsheetsExtract);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() tsheetsExtract: TsheetsExtract) {
    return this.tsheetsExtractsService.update(tsheetsExtract);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tsheetsExtractsService.delete(id);
  }
}

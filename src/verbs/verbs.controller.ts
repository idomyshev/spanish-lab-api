import { Controller, Get, Param } from '@nestjs/common';
import { VerbsService } from './verbs.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Verb } from './entities/verb.entity';

@ApiTags('verbs') // Группировка маршрутов по тегам
@Controller('verbs')
export class VerbsController {
  constructor(private readonly verbsService: VerbsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить список всех глаголов' })
  @ApiResponse({ status: 200, description: 'Список глаголов', type: [Verb] })
  async findAll() {
    return this.verbsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить глагол по ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Глагол', type: Verb })
  async findOne(@Param('id') id: number): Promise<Verb> {
    return this.verbsService.findOne(id);
  }

  // Добавьте декораторы для остальных маршрутов
}

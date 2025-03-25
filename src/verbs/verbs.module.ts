import { Module } from '@nestjs/common';
import { VerbsService } from './verbs.service';
import { VerbsController } from './verbs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verb } from './entities/verb.entity';
import { VerbForm } from './entities/verb-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verb, VerbForm])],
  controllers: [VerbsController],
  providers: [VerbsService],
})
export class VerbsModule {}

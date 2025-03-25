import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerbsModule } from './verbs/verbs.module';

@Module({
  imports: [VerbsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

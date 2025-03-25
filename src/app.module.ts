import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerbsModule } from './verbs/verbs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных
      host: 'localhost', // Хост базы данных
      port: 5432, // Порт базы данных
      username: 'your_username', // Имя пользователя базы данных
      password: 'your_password', // Пароль базы данных
      database: 'your_database', // Имя базы данных
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Путь к сущностям
      synchronize: true, // В production использовать migrations!
    }),
    VerbsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

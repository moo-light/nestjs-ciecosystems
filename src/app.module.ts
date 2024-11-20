import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { AppImportModules } from 'src/app.imports.modules';
import { TodosModule } from 'src/todos/todos.module';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ...AppImportModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
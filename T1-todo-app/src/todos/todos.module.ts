import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TodosController } from 'src/todos/todos.controller';
import { TodosService } from 'src/todos/todos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule { }

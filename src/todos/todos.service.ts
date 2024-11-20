import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) { }

    async findOne(id: number): Promise<Todo> {
        return this.todoRepository.findOne({ where: { id } });
    }
    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    async create(todo: Partial<Todo>): Promise<Todo> {
        const newTodo = this.todoRepository.create(todo);
        return this.todoRepository.save(newTodo);
    }

    async update(id: number, todo: Partial<Todo>): Promise<Todo> {
        let currentTodo: Todo = await this.todoRepository.findOne({ where: { id } });
        if (currentTodo) {
            currentTodo = { ...currentTodo, ...todo };
            await this.todoRepository.update(id, currentTodo);
        }
        return currentTodo;
    }

    async delete(id: number): Promise<void> {
        await this.todoRepository.delete(id);
    }
}
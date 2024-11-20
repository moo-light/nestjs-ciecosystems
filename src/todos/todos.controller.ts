import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { TodosService } from 'src/todos/todos.service';
import { Todo } from 'src/entities/todo.entity';
import { TodoDTO } from 'src/todos/dtos/todos.get';
@Controller('todos')
export class TodosController {

    constructor(private readonly todoService: TodosService) { }

    @Get()
    async findAll() {
        return this.todoService.findAll()
            .then(todos => todos.map(todo => new TodoDTO(todo)));
    }

    @Get(":id")
    async findOne(@Param('id') id: string | number) {
        if (typeof id === 'string') return this.findOneSlug(id);
        const todo = await this.todoService.findOne(id);
        const todoDTO = new TodoDTO(todo);
        return todoDTO;
    }

    @Get(":slug")
    async findOneSlug(@Param('slug') slug: string) {
        const id = parseInt(slug.split('-').pop());
        const todo = await this.todoService.findOne(id);
        const todoDTO = new TodoDTO(todo);
        return todoDTO;
    }

    @Post()
    async create(@Body() todo: Todo): Promise<TodoDTO> {
        todo.created_at = new Date();
        const todoDto = new TodoDTO(await this.todoService.create(todo));
        return todoDto;
    }
    @Put(":id")
    async update(@Body() todo: Todo, @Param('id') id: number): Promise<TodoDTO> {
        todo.updated_at = new Date();
        console.log(id)

        const result = await this.todoService.update(id, todo);
        const todoDto = new TodoDTO(result);
        return todoDto;
    }
    @Delete(":id")
    async delete(id: number) {
        const todoDto = this.todoService.delete(id);
        return todoDto;
    }
}

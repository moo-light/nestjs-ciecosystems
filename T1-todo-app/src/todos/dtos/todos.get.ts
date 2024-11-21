import slugify from "slugify";
import { Todo } from "src/entities/todo.entity";

export class TodoDTO {
    constructor(todo: Todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.content = todo.content;
        this.status = todo.status;
        this.created_at = todo.created_at;
        this.updated_at = todo.updated_at;
        this.slug = slugify(todo.title + " " + todo.id, { lower: true, trim: true });
    }

    id: number;

    title: string;

    content: string;

    status: string;

    created_at: Date;

    updated_at: Date;

    slug: string;

}

import { Entity, PrimaryGeneratedColumn, Column, Index, } from "typeorm";

export enum TodoStatus {
    Pending = 'pending',
    Done = 'done',
    InProgress = 'in progress',
}

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    title: string;

    @Column()
    content: string;

    @Column({
        type: "enum",
        enum: TodoStatus,
        default: "pending"
    })
    status: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}

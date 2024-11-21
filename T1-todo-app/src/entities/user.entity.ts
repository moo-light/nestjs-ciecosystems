
import { Entity, PrimaryGeneratedColumn, Column, Index, } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    name: string;

    @Column()
    @Index({ unique: true })
    email: string;

    @Column({ nullable: false ,default: ''})
    password: string;
}

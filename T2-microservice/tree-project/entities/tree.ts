import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Tree {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    name: string;

    @Column()
    type: string;

    @Column()
    birthDate: Date;

    @Column()
    price: number;
}

export const treeSample = {
    id: 1,
    name: 'Oak',
    type: 'Deciduous',
    birthDate: new Date('2020-01-01'),
    price: 100
};
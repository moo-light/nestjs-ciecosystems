import { Directive, ObjectType, Field, ID, Float, Int } from "@nestjs/graphql";

@ObjectType({
    description: 'Potato object type',
})
class Potato {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    color: string;

    @Field(() => Int)
    length: number;

    @Field(() => Float)
    weight: number;

    @Field(() => Float)
    price: number;
}

const listPotato: Potato[] = [
    { id: '1', name: 'Potato1', color: 'Brown', length: 10, weight: 0.5, price: 1.0 },
    { id: '2', name: 'Potato2', color: 'Yellow', length: 12, weight: 0.6, price: 1.2 },
    { id: '3', name: 'Potato3', color: 'Red', length: 8, weight: 0.4, price: 0.8 },
    { id: '4', name: 'Potato4', color: 'Purple', length: 11, weight: 0.55, price: 1.1 },
    { id: '5', name: 'Potato5', color: 'White', length: 9, weight: 0.45, price: 0.9 },
    { id: '6', name: 'Potato6', color: 'Brown', length: 13, weight: 0.65, price: 1.3 },
    { id: '7', name: 'Potato7', color: 'Yellow', length: 14, weight: 0.7, price: 1.4 },
    { id: '8', name: 'Potato8', color: 'Red', length: 7, weight: 0.35, price: 0.7 },
    { id: '9', name: 'Potato9', color: 'Purple', length: 15, weight: 0.75, price: 1.5 },
    { id: '10', name: 'Potato10', color: 'White', length: 10, weight: 0.5, price: 1.0 },
];

export { Potato, listPotato };

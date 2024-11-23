import { Directive, ObjectType, Field, ID, Float, Int } from "@nestjs/graphql";

@ObjectType({
    description: 'Carrot object type',
})
class Carrot {

    @Directive('@upper')
    @Field(() => ID)
    id: string;

    @Directive('@lower')
    @Field()
    name: string;

    @Directive('@upper')
    @Field()
    color: string;

    @Directive('@deprecated(reason: "Use lengthInCm instead")')
    @Field(() => Float)
    length: number;

    @Directive('@deprecated(reason: "Use weightInGrams instead")')
    @Field(() => Float)
    weight: number;

    @Directive('@range(min: 1, max: 10)')
    @Field(() => Int)
    sweetness: number;

    @Directive('@range(min: 1, max: 10)')
    @Field(() => Int)
    crunchiness: number;

    @Directive('@lower')
    @Field()
    farm: string;

    @Directive('@date(format: "YYYY-MM-DD")')
    @Field(() => Date)
    harvestDate: Date;

    @Directive('@currency')
    @Field(() => Float)
    price: number;
}

const listCarrot = [
    {
        id: '1',
        name: 'Orange Carrot',
        color: 'Orange',
        length: 15,
        weight: 200,
        sweetness: 8,
        crunchiness: 9,
        farm: 'Green Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.5
    },
    {
        id: '2',
        name: 'Purple Carrot',
        color: 'Purple',
        length: 20,
        weight: 250,
        sweetness: 7,
        crunchiness: 8,
        farm: 'Red Valley',
        harvestDate: new Date('12/30/2024'),
        price: 2
    },
    {
        id: '3',
        name: 'White Carrot',
        color: 'White',
        length: 18,
        weight: 220,
        sweetness: 6,
        crunchiness: 7,
        farm: 'Blue Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.8
    },
    {
        id: '4',
        name: 'Yellow Carrot',
        color: 'Yellow',
        length: 16,
        weight: 210,
        sweetness: 5,
        crunchiness: 6,
        farm: 'Yellow Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.6
    },
    {
        id: '5',
        name: 'Red Carrot',
        color: 'Red',
        length: 17,
        weight: 230,
        sweetness: 4,
        crunchiness: 5,
        farm: 'Orange Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.7
    },
    {
        id: '6',
        name: 'Black Carrot',
        color: 'Black',
        length: 19,
        weight: 240,
        sweetness: 3,
        crunchiness: 4,
        farm: 'Black Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.9
    },
    {
        id: '7',
        name: 'Blue Carrot',
        color: 'Blue',
        length: 14,
        weight: 190,
        sweetness: 7,
        crunchiness: 8,
        farm: 'Blue Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.4
    },
    {
        id: '8',
        name: 'Green Carrot',
        color: 'Green',
        length: 13,
        weight: 180,
        sweetness: 6,
        crunchiness: 7,
        farm: 'Green Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.3
    },
    {
        id: '9',
        name: 'Pink Carrot',
        color: 'Pink',
        length: 12,
        weight: 170,
        sweetness: 5,
        crunchiness: 6,
        farm: 'Pink Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.2
    },
    {
        id: '10',
        name: 'Brown Carrot',
        color: 'Brown',
        length: 11,
        weight: 160,
        sweetness: 4,
        crunchiness: 5,
        farm: 'Brown Valley',
        harvestDate: new Date('12/30/2024'),
        price: 1.1
    }
];

export { Carrot, listCarrot };
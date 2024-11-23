import { InputType, Field, Float, Int } from "@nestjs/graphql";

@InputType({
    description: 'Carrot input type',
    isAbstract: false
})
export class CarrotRequestDTO {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    color?: string;

    @Field(() => Float, { nullable: true })
    length?: number;

    @Field(() => Float, { nullable: true })
    weight?: number;

    @Field(() => Int, { nullable: true })
    sweetness?: number;

    @Field(() => Int, { nullable: true })
    crunchiness?: number;

    @Field({ nullable: true })
    farm?: string;

    @Field(() => Date, { nullable: true })
    harvestDate?: Date;

    @Field(() => Float, { nullable: true })
    price?: number;
}
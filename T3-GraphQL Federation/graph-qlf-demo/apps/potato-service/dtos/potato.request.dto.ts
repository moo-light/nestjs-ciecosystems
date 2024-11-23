import { Field, ID, Float, Int, InputType, ArgsType } from "@nestjs/graphql";

@ArgsType()
@InputType({
    description: 'Potato input type',
})
export class PotatoRequestDTO {

    @Field({ nullable: true })    
    name?: string;

    @Field({ nullable: true })
    color?: string;

    @Field(() => Int, { nullable: true })
    length?: number;

    @Field(() => Float, { nullable: true })
    weight?: number;

    @Field(() => Float, { nullable: true })
    price?: number;
}
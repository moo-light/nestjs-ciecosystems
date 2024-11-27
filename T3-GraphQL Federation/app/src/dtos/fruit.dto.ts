import { Field, InputType, ObjectType } from '@nestjs/graphql';

//input
@InputType()
export class FruitRequestDto {
  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  weight: number;
}

@ObjectType()
export class FruitResponseDto {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  weight: number;
}
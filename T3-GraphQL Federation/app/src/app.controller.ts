import * as graphql from '@nestjs/graphql'
import { FruitRequestDto, FruitResponseDto } from './dtos/fruit.dto';

@graphql.Resolver()
export class AppResolver {
  constructor() {}

  @graphql.Query(() => FruitResponseDto, {
    name: "cuong_dep_trai"
  })
  getHello(@graphql.Args('args') args: FruitRequestDto): FruitResponseDto {
    return {
      id: 1,  
      name: args.name,
      color: args.color,
      weight: args.weight
    }
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';
import { CarrotService } from './carrot-service.service';
import { Carrot } from 'apps/carrot-service/dtos/carrot.response.dto';
import { CarrotRequestDTO } from 'apps/carrot-service/dtos/carrot.request.dto';

@Resolver("Carrot")
export class CarrotResolver {
  constructor(private readonly carrotService: CarrotService) { }

  @Query(() => [Carrot], {
    name: "tre_trau_Da_Den"
  })
  getCarrots(@Args('args', {
    nullable: true
  }) args?: CarrotRequestDTO): Carrot[] {
    return this.carrotService.getCarrots(args);
  }
}

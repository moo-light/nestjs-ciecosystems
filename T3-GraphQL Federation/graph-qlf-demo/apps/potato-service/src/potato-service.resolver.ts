import { Controller, Get } from '@nestjs/common';
import { PotatoService } from './potato-service.service';
import { Args, Query } from '@nestjs/graphql';
import { Potato } from 'apps/potato-service/dtos/potato.response.dto';
import { PotatoRequestDTO } from 'apps/potato-service/dtos/potato.request.dto';

@Controller()
export class PotatoResolver {
  constructor(private readonly PotatoService: PotatoService) { }

  @Query(() => [Potato],
    {
      name: "an_cai_nay_tot_cho_suc_khoe"
    })
  getPotatoes(@Args('args', {
    nullable: true,

  }) args?: PotatoRequestDTO): Potato[] {
    return this.PotatoService.getPotatoes();
  }
}

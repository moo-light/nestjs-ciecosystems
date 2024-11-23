import { Controller, Get } from '@nestjs/common';
import { AGplGatewayService } from './a_gpl_gateway.service';

@Controller()
export class AGplGatewayController {
  constructor(private readonly aGplGatewayService: AGplGatewayService) {}

  @Get()
  getHello(): string {
    return this.aGplGatewayService.getHello();
  }
}

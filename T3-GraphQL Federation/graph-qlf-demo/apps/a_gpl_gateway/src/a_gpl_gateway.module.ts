import { Module } from '@nestjs/common';
import { AGplGatewayController } from './a_gpl_gateway.controller';
import { AGplGatewayService } from './a_gpl_gateway.service';

@Module({
  imports: [],
  controllers: [AGplGatewayController],
  providers: [AGplGatewayService],
})
export class AGplGatewayModule {}

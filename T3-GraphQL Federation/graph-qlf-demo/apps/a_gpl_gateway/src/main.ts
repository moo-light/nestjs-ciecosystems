import { NestFactory } from '@nestjs/core';
import { AGplGatewayModule } from './a_gpl_gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(AGplGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

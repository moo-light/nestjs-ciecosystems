import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TreeService } from 'apps/tree-service/src/tree-service.service';
import { PROTO_TREE_SERVICE } from 'utils/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TreeService, {
    transport: Transport.GRPC,
    options: {
      package: PROTO_TREE_SERVICE.PACKAGE,
      protoPath: PROTO_TREE_SERVICE.PROTO_PATH,
    },
  });
  await app.listen();
  console.log("Tree Service is running");
}
bootstrap();

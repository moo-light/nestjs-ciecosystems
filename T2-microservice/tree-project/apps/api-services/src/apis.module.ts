import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TreeController } from 'apps/api-services/src/apis.controller';
import { PROTO_TREE_SERVICE } from 'utils/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PROTO_TREE_SERVICE.NAME,
        transport: Transport.GRPC,
        options: {
          package: PROTO_TREE_SERVICE.PACKAGE,
          protoPath: PROTO_TREE_SERVICE.PROTO_PATH,
        },
      },
    ]),
  ],
  controllers: [TreeController],
})
export class AppModule {}

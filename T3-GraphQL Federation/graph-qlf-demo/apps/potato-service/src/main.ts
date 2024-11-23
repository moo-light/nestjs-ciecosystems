import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { join } from 'path';
import { printSchema } from 'graphql';
import { promises as fsPromises } from "fs"
import { PotatoServiceModule } from 'apps/potato-service/src/potato-service.module';
import { PotatoResolver } from 'apps/potato-service/src/potato-service.resolver';


const generateSchema = async () => {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gplSchemaFactory = app.get(GraphQLSchemaFactory)
  const schema = await gplSchemaFactory.create([PotatoResolver]);
  await fsPromises.writeFile(
    join(process.cwd(), 'apps/potato-service/potato-service.gql'),
    printSchema(schema)
  )
}

async function bootstrap() {
  const app = await NestFactory.create(PotatoServiceModule);
  await app.listen(3005);
}
generateSchema().then(() => bootstrap());
// bootstrap();
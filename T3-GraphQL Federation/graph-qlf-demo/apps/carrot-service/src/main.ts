import { NestFactory } from '@nestjs/core';
import { CarrotServiceModule } from './carrot-service.module';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { CarrotResolver } from 'apps/carrot-service/src/carrot-service.resolver';
import { join } from 'path';
import { printSchema } from 'graphql';
import { promises as fsPromises } from "fs"


const generateSchema = async () => {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gplSchemaFactory = app.get(GraphQLSchemaFactory)
  const schema = await gplSchemaFactory.create([CarrotResolver]);
  await fsPromises.writeFile(
    join(process.cwd(), 'apps/carrot-service/carrot-service.gql'),
    printSchema(schema)
  )
}

async function bootstrap() {
const app = await NestFactory.create(CarrotServiceModule);
  await app.listen(3001);
}
generateSchema().then(() => bootstrap());
// bootstrap();
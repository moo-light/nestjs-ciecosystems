import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { join } from 'path';
import { AppResolver } from './app.controller';
import { promises as fsPromises } from "fs"

const generateSchema = async () => {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule)
  await app.init()

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
  const schema = await gqlSchemaFactory.create([
     AppResolver
  ])
  await fsPromises.writeFile(
      join(
          process.cwd(),
          "src/schema.gql",
      ),
      printSchema(schema),
  )
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3005);
}
generateSchema().then(() => bootstrap());

import { Module } from '@nestjs/common';
import { CarrotService } from './carrot-service.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CarrotResolver } from 'apps/carrot-service/src/carrot-service.resolver';

import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['apps/carrot-service/*.gql', 'apps/carrot-service/*.graphql'],
      playground: false,
      autoSchemaFile: join(process.cwd(), 'apps/carrot-service/carrot-service.graphql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: true
    }),
  ],
  providers: [CarrotService, CarrotResolver],
})
export class CarrotServiceModule { }

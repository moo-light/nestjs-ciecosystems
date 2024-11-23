import { Module } from '@nestjs/common';
import { PotatoResolver } from './potato-service.resolver';
import { PotatoService } from './potato-service.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['apps/potato-service/*.gql', 'apps/potato-service/*.graphql'],
    playground: false,
    // autoSchemaFile: join(process.cwd(), 'apps/potato-service/schema.graphql'),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true
  }),],
  providers: [PotatoService, PotatoResolver],
})
export class PotatoServiceModule { }

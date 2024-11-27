import { ApolloFederationDriver, ApolloFederationDriverConfig, ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        introspection: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'Carrot', url: 'http://localhost:3001/graphql' },
            { name: 'Potato', url: 'http://localhost:3005/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AGplGatewayModule { }

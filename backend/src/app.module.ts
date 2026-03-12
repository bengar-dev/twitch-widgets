import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { join } from 'node:path';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        emitTypenameField: true,
      },
      context: ({ req }: { req: Request }) => ({ req }),
    }),
    HealthcheckModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from "path";
import { FurnitureResolver } from './furniture.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(__dirname, "src/schema.graphql"),
      // set the request on the context object
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [FurnitureResolver]
})
export class AppModule {}

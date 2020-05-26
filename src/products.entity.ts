import { Field, Directive, InterfaceType, ID } from '@nestjs/graphql';

@InterfaceType()
@Directive('@key(fields: "id")')
export abstract class Product {
  @Field(() => ID)
  id: string;

  @Field()
  manufacturer: string;

  @Field()
  model: string;
}

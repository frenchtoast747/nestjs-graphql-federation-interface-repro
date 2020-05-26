import { Field, ObjectType, Directive } from "@nestjs/graphql";
import { Product } from './products.entity';

@ObjectType({implements:[Product]})
@Directive('@key(fields: "id")')
export class Furniture extends Product {

  @Field()
  style: string;
}

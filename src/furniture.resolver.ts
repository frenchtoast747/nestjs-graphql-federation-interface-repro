import { Query, Resolver, ResolveReference } from '@nestjs/graphql';

import { Furniture } from './furniture.entity';

const FURNITURE = [
  {
    id: "1",
    manufacturer: "ACME Co.",
    model: "The Good Kind",
    style: "The Comfy Kind",
  }
]

@Resolver(Furniture)
export class FurnitureResolver {
  @ResolveReference()
  resolveRef(reference: Pick<Furniture, "id">): Furniture | null {
    return FURNITURE.find(f => f.id === reference.id)
  }

  @Query(() => [Furniture])
  allFurniture(): Furniture[] {
    return FURNITURE;
  }
}

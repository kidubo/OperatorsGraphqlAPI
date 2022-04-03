import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  id: string;

  @Field({ nullable: true })
  Buses?: string;

  @Field({ nullable: true })
  Ferries?: string;

  @Field({ nullable: true })
  Flights?: string;

  @Field({ nullable: true })
  Trains?: string;
}

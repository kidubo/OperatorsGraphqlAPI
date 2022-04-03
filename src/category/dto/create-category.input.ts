import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field({ nullable: true })
  Buses: string;

  @Field({ nullable: true })
  Ferries: string;

  @Field({ nullable: true })
  Flights: string;

  @Field({ nullable: true })
  Trains: string;
}

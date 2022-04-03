import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDefined, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateOperatorInput {
  @Field(() => Int)
  phoneNumber: number;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  website: string;

  @IsString()
  @Field()
  email: string;

  @IsString()
  @Field()
  address: string;

  @IsString()
  @Field()
  description: string;

  @Field()
  categoryId: string
}

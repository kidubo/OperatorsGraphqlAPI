import { CreateOperatorInput } from './create-operator.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsDefined, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateOperatorInput extends PartialType(CreateOperatorInput) {
  @Field()
  id: string;

  @IsOptional()
  @IsString()
  @Field(() => Int, { nullable: true })
  phoneNumber?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  website?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  address?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  description?: string;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@ObjectType()
@Entity()
export class Operator {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Int)
  @Column()
  phoneNumber: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  website: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.operator)
  @Field(() => Category)
  category: Category;

  @Column()
  @Field()
  categoryId: string;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Operator } from '../../operator/entities/operator.entity';

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  Buses: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  Ferries: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  Flights: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  Trains: string;

  @OneToMany(() => Operator, (operator) => operator.category)
  @Field(() => [Operator], { nullable: true })
  operator: Operator[];
}

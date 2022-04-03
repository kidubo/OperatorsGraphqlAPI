import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { OperatorService } from './operator.service';
import { Operator } from './entities/operator.entity';
import { CreateOperatorInput } from './dto/create-operator.input';
import { UpdateOperatorInput } from './dto/update-operator.input';
import { Category } from '../category/entities/category.entity';

@Resolver(() => Operator)
export class OperatorResolver {
  constructor(private readonly operatorService: OperatorService) {}

  @Mutation(() => Operator)
  createOperator(
    @Args('createOperatorInput') createOperatorInput: CreateOperatorInput,
  ) {
    return this.operatorService.create(createOperatorInput);
  }

  @Query(() => [Operator], { name: 'getAlloperators' })
  findAll() {
    return this.operatorService.findAll();
  }

  @Query(() => Operator, { name: 'GetOperatorById' })
  findOne(@Args('id') id: string) {
    return this.operatorService.findOne(id);
  }

  @Mutation(() => Operator)
  updateOperator(
    @Args('updateOperatorInput') updateOperatorInput: UpdateOperatorInput,
  ) {
    return this.operatorService.update(
      updateOperatorInput.id,
      updateOperatorInput,
    );
  }

  @Mutation(() => Operator)
  removeOperator(@Args('id') id: string) {
    return this.operatorService.remove(id);
  }

  @ResolveField(() => Category)
  category(@Parent() operator: Operator) {
    return this.operatorService.getCategory(operator.categoryId);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';
import { CreateOperatorInput } from './dto/create-operator.input';
import { UpdateOperatorInput } from './dto/update-operator.input';
import { Operator } from './entities/operator.entity';

@Injectable()
export class OperatorService {
  constructor(
    @InjectRepository(Operator) private repo: Repository<Operator>,
    private readonly categoryService: CategoryService,
  ) {}

  create(createOperatorInput: CreateOperatorInput) {
    const newTourOperator = this.repo.create(createOperatorInput);
    return this.repo.save(newTourOperator);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    if (!id) {
      return null;
    }
    const operator = await this.repo.findOne(id);
    if (!operator) {
      throw new NotFoundException('Operator not found');
    }

    return operator;
  }

  async update(id: string, updateOperatorInput: UpdateOperatorInput) {
    const operator = await this.findOne(id);
    if (!operator) {
      throw new NotFoundException('User not found');
    }

    Object.assign(operator, updateOperatorInput);
    return this.repo.save(operator);
  }

  async remove(id: string) {
    const operator = await this.repo.findOne(id);
    if (!operator) {
      throw new NotFoundException('Operator not found');
    }

    return this.repo.remove(operator);
  }

  async getCategory(id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }
}

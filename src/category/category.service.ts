import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}
  create(createCategoryInput: CreateCategoryInput) {
    const newCategory = this.repo.create(createCategoryInput);
    return this.repo.save(newCategory);
  }

  async findAll() {
    return await this.repo.find({
      relations: ['operator'],
    });
  }

  async findOne(id: string) {
    return await this.repo.findOne(id, { relations: ['operator'] });
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    const category: Category = this.repo.create(updateCategoryInput);
    category.id = id;
    return this.repo.save(category);
  }
}

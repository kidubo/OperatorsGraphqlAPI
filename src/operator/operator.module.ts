import { Module } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { OperatorResolver } from './operator.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operator } from './entities/operator.entity';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Operator]), CategoryModule],
  providers: [OperatorResolver, OperatorService],
})
export class OperatorModule {}

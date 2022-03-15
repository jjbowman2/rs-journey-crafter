import { ObjectType } from '@nestjs/graphql';
import { Task } from '../../task/entities/task.entity';

@ObjectType()
export class Dependency {
  dependee: Task;
  dependent: Task;
}

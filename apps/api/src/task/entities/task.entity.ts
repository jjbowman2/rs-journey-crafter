import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Account } from '../../account/entities/account.entity';
import { Dependency } from '../../dependency/entities/dependency.entity';
import { Skill } from '../../skill/skill';
import { TaskType } from '../../task-type/task-type';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;
  account: Account;
  taskType: TaskType;
  title: string;
  description?: string;
  skill?: Skill;
  level?: number;
  questId?: number;
  achievementDiaryId?: number;
  combatTaskId?: number;
  dependees: Dependency[];
  dependents: Dependency[];
  complete: boolean;
  labels: string[];
  createdAt: Date;
}

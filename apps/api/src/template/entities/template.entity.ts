import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TemplateTask } from '../../template-task/entities/template-task.entity';

@ObjectType()
export class Template {
  @Field(() => ID)
  id: number;
  name: string;
  description?: string;
  tags: string[];
  templateTasks: TemplateTask[];
}

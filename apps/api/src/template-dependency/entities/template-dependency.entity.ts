import { ObjectType } from '@nestjs/graphql';
import { TemplateTask } from '../../template-task/entities/template-task.entity';

@ObjectType()
export class TemplateDependency {
  dependee: TemplateTask;
  dependent: TemplateTask;
}

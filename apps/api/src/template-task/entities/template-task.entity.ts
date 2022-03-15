import { ObjectType, OmitType } from '@nestjs/graphql';
import { Task } from '../../task/entities/task.entity';
import { TemplateDependency } from '../../template-dependency/entities/template-dependency.entity';
import { Template } from '../../template/entities/template.entity';

@ObjectType()
export class TemplateTask extends OmitType(Task, [
  'account',
  'complete',
  'createdAt',
  'dependees',
  'dependents',
]) {
  template: Template;
  dependees: TemplateDependency[];
  dependents: TemplateDependency[];
}

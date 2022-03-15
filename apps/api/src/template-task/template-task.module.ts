import { Module } from '@nestjs/common';
import { TemplateTaskService } from './template-task.service';
import { TemplateTaskResolver } from './template-task.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [TemplateTaskResolver, TemplateTaskService, PrismaService],
})
export class TemplateTaskModule {}

import { Module } from '@nestjs/common';
import { TemplateDependencyService } from './template-dependency.service';
import { TemplateDependencyResolver } from './template-dependency.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    TemplateDependencyResolver,
    TemplateDependencyService,
    PrismaService,
  ],
})
export class TemplateDependencyModule {}

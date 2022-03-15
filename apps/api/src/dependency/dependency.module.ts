import { Module } from '@nestjs/common';
import { DependencyService } from './dependency.service';
import { DependencyResolver } from './dependency.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [DependencyResolver, DependencyService, PrismaService],
})
export class DependencyModule {}

import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTemplateDependencyInput } from './dto/create-template-dependency.input';
import { DeleteTemplateDependencyInput } from './dto/delete-template-dependency.input';

@Injectable()
export class TemplateDependencyService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createTemplateDependencyInput: CreateTemplateDependencyInput) {
    return this.prismaService.templateDependency.create({
      data: createTemplateDependencyInput,
    });
  }

  findAll() {
    return this.prismaService.templateDependency.findMany();
  }

  remove(deleteTemplateDependencyInput: DeleteTemplateDependencyInput) {
    return this.prismaService.templateDependency.delete({
      where: { dependeeId_dependentId: deleteTemplateDependencyInput },
    });
  }
}

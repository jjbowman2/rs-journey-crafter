import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDependencyInput } from './dto/create-dependency.input';
import { DeleteDependencyInput } from './dto/delete-dependency.input';

@Injectable()
export class DependencyService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createDependencyInput: CreateDependencyInput) {
    return this.prismaService.dependency.create({
      data: createDependencyInput,
    });
  }

  findAll() {
    return this.prismaService.dependency.findMany();
  }

  remove(deleteDependencyInput: DeleteDependencyInput) {
    return this.prismaService.dependency.delete({
      where: { dependeeId_dependentId: deleteDependencyInput },
    });
  }
}

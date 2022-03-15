import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTemplateTaskInput } from './dto/create-template-task.input';
import { UpdateTemplateTaskInput } from './dto/update-template-task.input';

@Injectable()
export class TemplateTaskService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createTemplateTaskInput: CreateTemplateTaskInput) {
    return this.prismaService.templateTask.create({
      data: createTemplateTaskInput,
    });
  }

  findAll() {
    return this.prismaService.templateTask.findMany();
  }

  findOne(id: number) {
    return this.prismaService.templateTask.findFirst({ where: { id } });
  }

  update(id: number, updateTemplateTaskInput: UpdateTemplateTaskInput) {
    return this.prismaService.templateTask.update({
      where: { id },
      data: updateTemplateTaskInput,
    });
  }

  remove(id: number) {
    return this.prismaService.templateTask.delete({ where: { id } });
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TaskService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createTaskInput: CreateTaskInput) {
    return this.prismaService.task.create({ data: createTaskInput });
  }

  findAll() {
    return this.prismaService.task.findMany();
  }

  findOne(id: number) {
    return this.prismaService.task.findFirst({ where: { id } });
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.prismaService.task.update({
      where: { id },
      data: updateTaskInput,
    });
  }

  remove(id: number) {
    return this.prismaService.task.delete({ where: { id } });
  }
}

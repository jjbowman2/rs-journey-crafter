import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTemplateInput } from './dto/create-template.input';
import { UpdateTemplateInput } from './dto/update-template.input';

@Injectable()
export class TemplateService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createTemplateInput: CreateTemplateInput) {
    return this.prismaService.template.create({ data: createTemplateInput });
  }

  findAll() {
    return this.prismaService.template.findMany();
  }

  findOne(id: number) {
    return this.prismaService.template.findFirst({ where: { id } });
  }

  update(id: number, updateTemplateInput: UpdateTemplateInput) {
    return this.prismaService.template.update({
      where: { id },
      data: updateTemplateInput,
    });
  }

  remove(id: number) {
    return this.prismaService.template.delete({ where: { id } });
  }
}

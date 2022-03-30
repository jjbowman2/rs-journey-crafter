import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";

@Injectable()
export class AccountService {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    create(createAccountInput: CreateAccountInput) {
        console.log(createAccountInput);
        return this.prismaService.account.create({ data: createAccountInput });
    }

    findAll() {
        return this.prismaService.account.findMany();
    }

    findOne(id: number) {
        return this.prismaService.account.findFirst({ where: { id } });
    }

    findByUserId(userId: string) {
        return this.prismaService.account.findMany({ where: { userId } });
    }

    update(id: number, updateAccountInput: UpdateAccountInput) {
        return this.prismaService.account.update({
            where: { id },
            data: updateAccountInput,
        });
    }

    remove(id: number) {
        return this.prismaService.account.delete({ where: { id } });
    }
}

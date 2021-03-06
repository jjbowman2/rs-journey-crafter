import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma.service";
import { AccountService } from "./account.service";

describe("AccountService", () => {
    let service: AccountService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AccountService, { provide: PrismaService, useValue: {} }],
        }).compile();

        service = module.get<AccountService>(AccountService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});

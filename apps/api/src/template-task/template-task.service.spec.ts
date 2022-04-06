import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma.service";
import { TemplateTaskService } from "./template-task.service";

describe("TemplateTaskService", () => {
    let service: TemplateTaskService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TemplateTaskService, { provide: PrismaService, useValue: {} }],
        }).compile();

        service = module.get<TemplateTaskService>(TemplateTaskService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});

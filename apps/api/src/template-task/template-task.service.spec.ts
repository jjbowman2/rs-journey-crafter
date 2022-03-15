import { Test, TestingModule } from "@nestjs/testing";
import { TemplateTaskService } from "./template-task.service";

describe("TemplateTaskService", () => {
    let service: TemplateTaskService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TemplateTaskService],
        }).compile();

        service = module.get<TemplateTaskService>(TemplateTaskService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});

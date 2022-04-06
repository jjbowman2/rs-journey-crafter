import { Test, TestingModule } from "@nestjs/testing";
import { TemplateTaskResolver } from "./template-task.resolver";
import { TemplateTaskService } from "./template-task.service";

describe("TemplateTaskResolver", () => {
    let resolver: TemplateTaskResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TemplateTaskResolver, { provide: TemplateTaskService, useValue: {} }],
        }).compile();

        resolver = module.get<TemplateTaskResolver>(TemplateTaskResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });
});

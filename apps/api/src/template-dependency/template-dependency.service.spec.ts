import { Test, TestingModule } from "@nestjs/testing";
import { TemplateDependencyService } from "./template-dependency.service";

describe("TemplateDependencyService", () => {
    let service: TemplateDependencyService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TemplateDependencyService],
        }).compile();

        service = module.get<TemplateDependencyService>(TemplateDependencyService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});

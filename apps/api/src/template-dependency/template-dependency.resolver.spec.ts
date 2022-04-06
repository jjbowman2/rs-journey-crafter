import { Test, TestingModule } from "@nestjs/testing";
import { TemplateDependencyResolver } from "./template-dependency.resolver";
import { TemplateDependencyService } from "./template-dependency.service";

describe("TemplateDependencyResolver", () => {
    let resolver: TemplateDependencyResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TemplateDependencyResolver, { provide: TemplateDependencyService, useValue: {} }],
        }).compile();

        resolver = module.get<TemplateDependencyResolver>(TemplateDependencyResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });
});

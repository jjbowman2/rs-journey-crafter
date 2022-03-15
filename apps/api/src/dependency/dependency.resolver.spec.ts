import { Test, TestingModule } from "@nestjs/testing";
import { DependencyResolver } from "./dependency.resolver";
import { DependencyService } from "./dependency.service";

describe("DependencyResolver", () => {
    let resolver: DependencyResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DependencyResolver, DependencyService],
        }).compile();

        resolver = module.get<DependencyResolver>(DependencyResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });
});

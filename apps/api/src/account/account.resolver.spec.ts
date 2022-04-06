import { Test, TestingModule } from "@nestjs/testing";
import { AccountResolver } from "./account.resolver";
import { AccountService } from "./account.service";

describe("AccountResolver", () => {
    let resolver: AccountResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AccountResolver,
                {
                    provide: AccountService,
                    useValue: {},
                },
            ],
        }).compile();

        resolver = module.get<AccountResolver>(AccountResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });
});

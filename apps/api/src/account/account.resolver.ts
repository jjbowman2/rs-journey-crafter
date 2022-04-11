import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";

@Resolver(() => Account)
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	@Mutation(() => Account)
	createAccount(@Args("createAccountInput") createAccountInput: CreateAccountInput) {
		return this.accountService.create(createAccountInput);
	}

	@Query(() => [Account], { name: "account" })
	findAll() {
		return this.accountService.findAll();
	}

	@Query(() => Account, { name: "account" })
	findOne(@Args("id") id: string) {
		return this.accountService.findOne(id);
	}

	@Query(() => [Account], { name: "account" })
	findByUserId(@Args("userId") userId: string) {
		return this.accountService.findByUserId(userId);
	}

	@Mutation(() => Account)
	updateAccount(@Args("updateAccountInput") updateAccountInput: UpdateAccountInput) {
		return this.accountService.update(updateAccountInput.id, updateAccountInput);
	}

	@Mutation(() => Account)
	removeAccount(@Args("id") id: string) {
		return this.accountService.remove(id);
	}
}

import { CreateAccountInput } from "./create-account.input";
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
	@Field(() => ID)
	id: string;
}

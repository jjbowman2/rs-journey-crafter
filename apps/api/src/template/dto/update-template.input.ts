import { CreateTemplateInput } from "./create-template.input";
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateTemplateInput extends PartialType(CreateTemplateInput) {
	@Field(() => ID)
	id: string;
}

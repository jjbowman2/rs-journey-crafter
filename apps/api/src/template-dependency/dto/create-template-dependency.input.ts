import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateTemplateDependencyInput {
	dependeeId: string;
	dependentId: string;
}

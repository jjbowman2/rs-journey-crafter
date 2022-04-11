import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateDependencyInput {
	dependeeId: string;
	dependentId: string;
}

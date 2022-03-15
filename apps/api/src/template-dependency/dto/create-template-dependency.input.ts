import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateTemplateDependencyInput {
    dependeeId: number;
    dependentId: number;
}

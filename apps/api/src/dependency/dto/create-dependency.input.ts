import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateDependencyInput {
    dependeeId: number;
    dependentId: number;
}

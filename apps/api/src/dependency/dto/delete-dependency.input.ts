import { InputType } from "@nestjs/graphql";
import { CreateDependencyInput } from "./create-dependency.input";

@InputType()
export class DeleteDependencyInput extends CreateDependencyInput {}

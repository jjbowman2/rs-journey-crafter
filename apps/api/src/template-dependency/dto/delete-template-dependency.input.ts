import { InputType } from "@nestjs/graphql";
import { CreateTemplateDependencyInput } from "./create-template-dependency.input";

@InputType()
export class DeleteTemplateDependencyInput extends CreateTemplateDependencyInput {}

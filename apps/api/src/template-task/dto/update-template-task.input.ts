import { CreateTemplateTaskInput } from "./create-template-task.input";
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateTemplateTaskInput extends PartialType(CreateTemplateTaskInput) {
    @Field(() => ID)
    id: number;
}

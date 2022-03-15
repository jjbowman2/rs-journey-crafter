import { InputType, OmitType } from "@nestjs/graphql";
import { TemplateTask } from "../entities/template-task.entity";

@InputType()
export class CreateTemplateTaskInput extends OmitType(
    TemplateTask,
    ["id", "dependees", "dependents", "template"] as const,
    InputType,
) {
    templateId: number;
}

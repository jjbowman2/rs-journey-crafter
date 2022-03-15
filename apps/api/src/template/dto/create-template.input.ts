import { InputType, OmitType } from "@nestjs/graphql";
import { Template } from "../entities/template.entity";

@InputType()
export class CreateTemplateInput extends OmitType(Template, ["id", "templateTasks"] as const, InputType) {}

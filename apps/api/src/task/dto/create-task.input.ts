import { InputType, OmitType } from "@nestjs/graphql";
import { Task } from "../entities/task.entity";

@InputType()
export class CreateTaskInput extends OmitType(Task, ["id", "account", "dependees", "dependents"] as const, InputType) {
    accountId: number;
}

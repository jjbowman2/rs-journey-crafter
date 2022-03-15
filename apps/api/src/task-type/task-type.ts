import { registerEnumType } from "@nestjs/graphql";

export enum TaskType {
    skill = "skill",
    quest = "quest",
    achievementDiary = "achievementDiary",
    combatTask = "combatTask",
    item = "item",
    custom = "custom",
}

registerEnumType(TaskType, {
    name: "TaskType",
});

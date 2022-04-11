import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TemplateTaskService } from "./template-task.service";
import { TemplateTask } from "./entities/template-task.entity";
import { CreateTemplateTaskInput } from "./dto/create-template-task.input";
import { UpdateTemplateTaskInput } from "./dto/update-template-task.input";

@Resolver(() => TemplateTask)
export class TemplateTaskResolver {
	constructor(private readonly templateTaskService: TemplateTaskService) {}

	@Mutation(() => TemplateTask)
	createTemplateTask(@Args("createTemplateTaskInput") createTemplateTaskInput: CreateTemplateTaskInput) {
		return this.templateTaskService.create(createTemplateTaskInput);
	}

	@Query(() => [TemplateTask], { name: "templateTask" })
	findAll() {
		return this.templateTaskService.findAll();
	}

	@Query(() => TemplateTask, { name: "templateTask" })
	findOne(@Args("id") id: string) {
		return this.templateTaskService.findOne(id);
	}

	@Mutation(() => TemplateTask)
	updateTemplateTask(@Args("updateTemplateTaskInput") updateTemplateTaskInput: UpdateTemplateTaskInput) {
		return this.templateTaskService.update(updateTemplateTaskInput.id, updateTemplateTaskInput);
	}

	@Mutation(() => TemplateTask)
	removeTemplateTask(@Args("id") id: string) {
		return this.templateTaskService.remove(id);
	}
}

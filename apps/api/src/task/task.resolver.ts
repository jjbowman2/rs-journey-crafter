import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TaskService } from "./task.service";
import { Task } from "./entities/task.entity";
import { CreateTaskInput } from "./dto/create-task.input";
import { UpdateTaskInput } from "./dto/update-task.input";

@Resolver(() => Task)
export class TaskResolver {
	constructor(private readonly taskService: TaskService) {}

	@Mutation(() => Task)
	createTask(@Args("createTaskInput") createTaskInput: CreateTaskInput) {
		return this.taskService.create(createTaskInput);
	}

	@Query(() => [Task], { name: "tasks" })
	findAll() {
		return this.taskService.findAll();
	}

	@Query(() => Task, { name: "task" })
	findOne(@Args("id") id: string) {
		return this.taskService.findOne(id);
	}

	@Query(() => [Task], { name: "tasksByAccountId" })
	findAllByAccountId(@Args("accountId") accountId: string) {
		return this.taskService.findAllByAccountId(accountId);
	}

	@Mutation(() => Task)
	updateTask(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput) {
		return this.taskService.update(updateTaskInput.id, updateTaskInput);
	}

	@Mutation(() => Task)
	removeTask(@Args("id") id: string) {
		return this.taskService.remove(id);
	}
}

import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TemplateService } from "./template.service";
import { Template } from "./entities/template.entity";
import { CreateTemplateInput } from "./dto/create-template.input";
import { UpdateTemplateInput } from "./dto/update-template.input";

@Resolver(() => Template)
export class TemplateResolver {
	constructor(private readonly templateService: TemplateService) {}

	@Mutation(() => Template)
	createTemplate(@Args("createTemplateInput") createTemplateInput: CreateTemplateInput) {
		return this.templateService.create(createTemplateInput);
	}

	@Query(() => [Template], { name: "template" })
	findAll() {
		return this.templateService.findAll();
	}

	@Query(() => Template, { name: "template" })
	findOne(@Args("id") id: string) {
		return this.templateService.findOne(id);
	}

	@Mutation(() => Template)
	updateTemplate(@Args("updateTemplateInput") updateTemplateInput: UpdateTemplateInput) {
		return this.templateService.update(updateTemplateInput.id, updateTemplateInput);
	}

	@Mutation(() => Template)
	removeTemplate(@Args("id") id: string) {
		return this.templateService.remove(id);
	}
}

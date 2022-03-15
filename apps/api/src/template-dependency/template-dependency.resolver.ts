import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TemplateDependencyService } from "./template-dependency.service";
import { TemplateDependency } from "./entities/template-dependency.entity";
import { CreateTemplateDependencyInput } from "./dto/create-template-dependency.input";
import { DeleteTemplateDependencyInput } from "./dto/delete-template-dependency.input";

@Resolver(() => TemplateDependency)
export class TemplateDependencyResolver {
    constructor(private readonly templateDependencyService: TemplateDependencyService) {}

    @Mutation(() => TemplateDependency)
    createTemplateDependency(
        @Args("createTemplateDependencyInput") createTemplateDependencyInput: CreateTemplateDependencyInput,
    ) {
        return this.templateDependencyService.create(createTemplateDependencyInput);
    }

    @Query(() => [TemplateDependency], { name: "templateDependency" })
    findAll() {
        return this.templateDependencyService.findAll();
    }

    @Mutation(() => TemplateDependency)
    removeTemplateDependency(
        @Args("deleteTemplateDependencyInput") deleteTemplateDependencyInput: DeleteTemplateDependencyInput,
    ) {
        return this.templateDependencyService.remove(deleteTemplateDependencyInput);
    }
}

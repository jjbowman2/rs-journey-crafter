import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DependencyService } from "./dependency.service";
import { Dependency } from "./entities/dependency.entity";
import { CreateDependencyInput } from "./dto/create-dependency.input";
import { DeleteDependencyInput } from "./dto/delete-dependency.input";

@Resolver(() => Dependency)
export class DependencyResolver {
    constructor(private readonly dependencyService: DependencyService) {}

    @Mutation(() => Dependency)
    createDependency(@Args("createDependencyInput") createDependencyInput: CreateDependencyInput) {
        return this.dependencyService.create(createDependencyInput);
    }

    @Query(() => [Dependency], { name: "dependency" })
    findAll() {
        return this.dependencyService.findAll();
    }

    @Mutation(() => Dependency)
    removeDependency(@Args("deleteDependencyInput") deleteDependencyInput: DeleteDependencyInput) {
        return this.dependencyService.remove(deleteDependencyInput);
    }
}

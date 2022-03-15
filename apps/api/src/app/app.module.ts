import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { AccountModule } from "../account/account.module";
import { TaskModule } from "../task/task.module";
import { TemplateModule } from "../template/template.module";
import { TemplateTaskModule } from "../template-task/template-task.module";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { DependencyModule } from "../dependency/dependency.module";
import { TemplateDependencyModule } from "../template-dependency/template-dependency.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "../schema.gql"),
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            buildSchemaOptions: {
                dateScalarMode: "timestamp",
            },
        }),
        AccountModule,
        TaskModule,
        TemplateModule,
        TemplateTaskModule,
        DependencyModule,
        TemplateDependencyModule,
    ],
})
export class AppModule {}

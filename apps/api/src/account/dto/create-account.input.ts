import { InputType, OmitType } from "@nestjs/graphql";
import { Account } from "../entities/account.entity";

@InputType()
export class CreateAccountInput extends OmitType(Account, ["id", "tasks"] as const, InputType) {}

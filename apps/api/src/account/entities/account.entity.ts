import { ObjectType, Field, registerEnumType, ID } from '@nestjs/graphql';
import { Task } from '../../task/entities/task.entity';

export enum Game {
  osrs = 'osrs',
  rs = 'rs',
  osrs_leagues = 'osrs_leagues',
}

registerEnumType(Game, {
  name: 'Game',
});

export enum AccountType {
  main = 'main',
  ironman = 'ironman',
  hardcore_ironman = 'hardcore_ironman',
  group_ironman = 'group_ironman',
  ultimate_ironman = 'ultimate_ironman',
}

registerEnumType(AccountType, {
  name: 'AccountType',
});

@ObjectType()
export class Account {
  @Field(() => ID)
  id: number;
  userId: number;
  accountName: string;
  game: Game;
  accountType?: AccountType;
  tasks?: Task[];
}

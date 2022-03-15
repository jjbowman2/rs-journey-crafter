import { registerEnumType } from "@nestjs/graphql";

export enum Skill {
    attack = "attack",
    strength = "strength",
    defence = "defence",
    ranged = "ranged",
    prayer = "prayer",
    magic = "magic",
    runecrafting = "runecrafting",
    hitpoints = "hitpoints",
    crafting = "crafting",
    mining = "mining",
    smithing = "smithing",
    fishing = "fishing",
    cooking = "cooking",
    firemaking = "firemaking",
    woodcutting = "woodcutting",
    agility = "agility",
    herblore = "herblore",
    thieving = "thieving",
    fletching = "fletching",
    slayer = "slayer",
    farming = "farming",
    construction = "construction",
    hunter = "hunter",
    constitution = "constitution",
    dunegoneering = "dunegoneering",
    summoning = "summoning",
    divination = "divination",
    invention = "invention",
}

registerEnumType(Skill, {
    name: "Skill",
});

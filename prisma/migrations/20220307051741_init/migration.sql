-- CreateEnum
CREATE TYPE "Game" AS ENUM ('osrs', 'rs', 'osrs_leagues');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('main', 'ironman', 'hardcore_ironman', 'group_ironman', 'ultimate_ironman');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('skill', 'quest', 'achievementDiary', 'combatTask', 'item', 'custom');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('attack', 'strength', 'defence', 'ranged', 'prayer', 'magic', 'runecrafting', 'hitpoints', 'crafting', 'mining', 'smithing', 'fishing', 'cooking', 'firemaking', 'woodcutting', 'agility', 'herblore', 'thieving', 'fletching', 'slayer', 'farming', 'construction', 'hunter', 'constitution', 'dunegoneering', 'summoning', 'divination', 'invention');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "accountName" TEXT NOT NULL,
    "game" "Game" NOT NULL,
    "accountType" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "taskType" "TaskType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "skill" "Skill",
    "level" INTEGER,
    "questId" INTEGER,
    "achievementDiaryId" INTEGER,
    "combatTaskId" INTEGER,
    "complete" BOOLEAN NOT NULL,
    "labels" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateTask" (
    "id" SERIAL NOT NULL,
    "templateId" INTEGER NOT NULL,
    "taskType" "TaskType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "skill" "Skill",
    "level" INTEGER,
    "questId" INTEGER,
    "achievementDiaryId" INTEGER,
    "combatTaskId" INTEGER,
    "labels" TEXT[],

    CONSTRAINT "TemplateTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkedTasks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LinkedTemplateTasks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LinkedTasks_AB_unique" ON "_LinkedTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkedTasks_B_index" ON "_LinkedTasks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkedTemplateTasks_AB_unique" ON "_LinkedTemplateTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkedTemplateTasks_B_index" ON "_LinkedTemplateTasks"("B");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateTask" ADD CONSTRAINT "TemplateTask_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkedTasks" ADD FOREIGN KEY ("A") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkedTasks" ADD FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkedTemplateTasks" ADD FOREIGN KEY ("A") REFERENCES "TemplateTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkedTemplateTasks" ADD FOREIGN KEY ("B") REFERENCES "TemplateTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `_LinkedTasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LinkedTemplateTasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LinkedTasks" DROP CONSTRAINT "_LinkedTasks_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkedTasks" DROP CONSTRAINT "_LinkedTasks_B_fkey";

-- DropForeignKey
ALTER TABLE "_LinkedTemplateTasks" DROP CONSTRAINT "_LinkedTemplateTasks_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkedTemplateTasks" DROP CONSTRAINT "_LinkedTemplateTasks_B_fkey";

-- DropTable
DROP TABLE "_LinkedTasks";

-- DropTable
DROP TABLE "_LinkedTemplateTasks";

-- CreateTable
CREATE TABLE "Dependency" (
    "dependeeId" INTEGER NOT NULL,
    "dependentId" INTEGER NOT NULL,

    CONSTRAINT "Dependency_pkey" PRIMARY KEY ("dependeeId","dependentId")
);

-- CreateTable
CREATE TABLE "TemplateDependency" (
    "dependeeId" INTEGER NOT NULL,
    "dependentId" INTEGER NOT NULL,

    CONSTRAINT "TemplateDependency_pkey" PRIMARY KEY ("dependeeId","dependentId")
);

-- AddForeignKey
ALTER TABLE "Dependency" ADD CONSTRAINT "Dependency_dependeeId_fkey" FOREIGN KEY ("dependeeId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependency" ADD CONSTRAINT "Dependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateDependency" ADD CONSTRAINT "TemplateDependency_dependeeId_fkey" FOREIGN KEY ("dependeeId") REFERENCES "TemplateTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateDependency" ADD CONSTRAINT "TemplateDependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "TemplateTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

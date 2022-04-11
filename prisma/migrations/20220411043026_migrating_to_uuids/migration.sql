/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Dependency` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TemplateDependency` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TemplateTask` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Dependency" DROP CONSTRAINT "Dependency_dependeeId_fkey";

-- DropForeignKey
ALTER TABLE "Dependency" DROP CONSTRAINT "Dependency_dependentId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_accountId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateDependency" DROP CONSTRAINT "TemplateDependency_dependeeId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateDependency" DROP CONSTRAINT "TemplateDependency_dependentId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateTask" DROP CONSTRAINT "TemplateTask_templateId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Account_id_seq";

-- AlterTable
ALTER TABLE "Dependency" DROP CONSTRAINT "Dependency_pkey",
ALTER COLUMN "dependeeId" SET DATA TYPE TEXT,
ALTER COLUMN "dependentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dependency_pkey" PRIMARY KEY ("dependeeId", "dependentId");

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "accountId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Task_id_seq";

-- AlterTable
ALTER TABLE "Template" DROP CONSTRAINT "Template_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Template_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Template_id_seq";

-- AlterTable
ALTER TABLE "TemplateDependency" DROP CONSTRAINT "TemplateDependency_pkey",
ALTER COLUMN "dependeeId" SET DATA TYPE TEXT,
ALTER COLUMN "dependentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TemplateDependency_pkey" PRIMARY KEY ("dependeeId", "dependentId");

-- AlterTable
ALTER TABLE "TemplateTask" DROP CONSTRAINT "TemplateTask_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "templateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TemplateTask_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TemplateTask_id_seq";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependency" ADD CONSTRAINT "Dependency_dependeeId_fkey" FOREIGN KEY ("dependeeId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependency" ADD CONSTRAINT "Dependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateTask" ADD CONSTRAINT "TemplateTask_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateDependency" ADD CONSTRAINT "TemplateDependency_dependeeId_fkey" FOREIGN KEY ("dependeeId") REFERENCES "TemplateTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateDependency" ADD CONSTRAINT "TemplateDependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "TemplateTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

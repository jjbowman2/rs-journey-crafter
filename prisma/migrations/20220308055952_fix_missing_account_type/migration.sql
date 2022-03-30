/*
  Warnings:

  - The `accountType` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType";

/*
  Warnings:

  - A unique constraint covering the columns `[teamId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberCount` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_teamId_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "memberCount" INTEGER NOT NULL,
ADD COLUMN     "teamId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "teamRef" INTEGER NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamId_key" ON "Team"("teamId");

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_teamRef_fkey" FOREIGN KEY ("teamRef") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

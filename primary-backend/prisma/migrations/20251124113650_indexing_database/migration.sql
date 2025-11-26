/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Action_sparkId_idx" ON "Action"("sparkId");

-- CreateIndex
CREATE INDEX "Spark_userId_idx" ON "Spark"("userId");

-- CreateIndex
CREATE INDEX "SparkRun_sparkId_idx" ON "SparkRun"("sparkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

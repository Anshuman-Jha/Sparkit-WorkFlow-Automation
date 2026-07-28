-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spark" (
    "id" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Spark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableTriggers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "AvailableTriggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "AvailableAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SparkRun" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "SparkRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SparkRunOutbox" (
    "id" TEXT NOT NULL,
    "sparkRunId" TEXT NOT NULL,

    CONSTRAINT "SparkRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Spark_userId_idx" ON "Spark"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_sparkId_key" ON "Trigger"("sparkId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_triggerId_key" ON "Trigger"("triggerId");

-- CreateIndex
CREATE INDEX "Action_sparkId_idx" ON "Action"("sparkId");

-- CreateIndex
CREATE INDEX "SparkRun_sparkId_idx" ON "SparkRun"("sparkId");

-- CreateIndex
CREATE UNIQUE INDEX "SparkRunOutbox_sparkRunId_key" ON "SparkRunOutbox"("sparkRunId");

-- AddForeignKey
ALTER TABLE "Spark" ADD CONSTRAINT "Spark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvailableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SparkRun" ADD CONSTRAINT "SparkRun_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SparkRunOutbox" ADD CONSTRAINT "SparkRunOutbox_sparkRunId_fkey" FOREIGN KEY ("sparkRunId") REFERENCES "SparkRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

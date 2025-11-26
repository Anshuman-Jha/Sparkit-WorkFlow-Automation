-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Spark" (
    "id" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "Spark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trigger" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "sortingOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AvailableTriggers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvailableTriggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Action" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AvailableAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvailableAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SparkRun" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "SparkRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SparkRunOutbox" (
    "id" TEXT NOT NULL,
    "sparkRunId" TEXT NOT NULL,

    CONSTRAINT "SparkRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_sparkId_key" ON "public"."Trigger"("sparkId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_triggerId_key" ON "public"."Trigger"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "SparkRunOutbox_sparkRunId_key" ON "public"."SparkRunOutbox"("sparkRunId");

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "public"."AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "public"."Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "public"."Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "public"."AvailableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SparkRun" ADD CONSTRAINT "SparkRun_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "public"."Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SparkRunOutbox" ADD CONSTRAINT "SparkRunOutbox_sparkRunId_fkey" FOREIGN KEY ("sparkRunId") REFERENCES "public"."SparkRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

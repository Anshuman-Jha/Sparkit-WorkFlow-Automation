-- CreateTable
CREATE TABLE "public"."SparkRun" (
    "id" TEXT NOT NULL,
    "sparkId" TEXT NOT NULL,

    CONSTRAINT "SparkRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SparkRunOutbox" (
    "id" TEXT NOT NULL,
    "sparkRunId" TEXT NOT NULL,

    CONSTRAINT "SparkRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SparkRunOutbox_sparkRunId_key" ON "public"."SparkRunOutbox"("sparkRunId");

-- AddForeignKey
ALTER TABLE "public"."SparkRun" ADD CONSTRAINT "SparkRun_sparkId_fkey" FOREIGN KEY ("sparkId") REFERENCES "public"."Spark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SparkRunOutbox" ADD CONSTRAINT "SparkRunOutbox_sparkRunId_fkey" FOREIGN KEY ("sparkRunId") REFERENCES "public"."SparkRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

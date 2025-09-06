/*
  Warnings:

  - Added the required column `metadata` to the `SparkRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."SparkRun" ADD COLUMN     "metadata" JSONB NOT NULL;

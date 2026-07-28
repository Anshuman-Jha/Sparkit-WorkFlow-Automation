-- AlterTable
ALTER TABLE "Action" ALTER COLUMN "sortingOrder" SET DEFAULT 0,
ALTER COLUMN "sortingOrder" DROP DEFAULT;
DROP SEQUENCE "Action_sortingOrder_seq";
